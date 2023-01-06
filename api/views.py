from django.shortcuts import render
from rest_framework.response import Response
# Create your views here.
from rest_framework.decorators import api_view
from .models import note
from .serializers import noteSerializer
@api_view(['GET'])
def routes(request):
     routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'name': None,
            'text': None,
            'description': 'notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'name': None,
            'text': None,
            'description': 'note '
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'text': {'name': ""},
            'text': {'text': ""},
            'description': 'Creates  note'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'name': {'text': ""},
            'text': {'text': ""},
            'description': 'Updates note '
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'name': None,
            'text': None,
            'description': 'Deletes  note'
        },
    ]
     return Response(routes)


@api_view(['GET'])
def getNotes(request):
    notes=note.objects.all().order_by('-updated')
    serializer=noteSerializer(notes,many=True)
    return Response(serializer.data)
@api_view(['GET'])
def getNote(request,pk):
    notes=note.objects.get(id=pk)
    serializer=noteSerializer(notes,many=False)
    return Response(serializer.data)
@api_view(['POST'])
def createNote(request):
    data=request.data
    Note=note.objects.create(text=data['text'],name=data['name'])
    serializer=noteSerializer(Note,many=False)
    return Response(serializer.data)
@api_view(['PUT'])
def updateNote(request,pk):
    Note=note.objects.get(id=pk)
    data=request.data
    serializer=noteSerializer(instance=Note,data=data)
    if serializer.is_valid():
        serializer.save()
        
    
    return Response(serializer.data)
@api_view(['DELETE'])
def deleteNote(request,pk):
    Note=note.objects.get(id=pk)
    Note.delete()
    
    return Response('Note was deleted')