from django.db import models

# Create your models here.
class note(models.Model):
    name=models.CharField( max_length=40,null=True)
    text=models.CharField( max_length=5000,null=True)
    updated=models.DateTimeField( auto_now=True, auto_now_add=False)
    created=models.DateTimeField(  auto_now_add=True)
    def __str__(self) :
        return self.text[0:10]