
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const NotePage = () => {
    const { id } = useParams();
    let history = useNavigate();
    let [note, setNote] = useState(null)
    let handleSubmit = () => {
        if (id !== 'new' && note !== null) {
            updateNote();
        }


    }
    let handleAdding = () => {
        if (note !== null) {
            createNote()
        }
    }
    useEffect(() => {
        getNote()
    }, [id])

    let getNote = async () => {
        if (id !== 'new') {
            let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`)
            let data = await response.json()

            setNote(data)
        }

    }
    let updateNote = async () => {

        axios.put(`http://127.0.0.1:8000/api/notes/${id}/update/`, {
            text: note.text,
            name: note.name,

        })
    }
    let createNote = async () => {

        axios.post(`http://127.0.0.1:8000/api/notes/create/`, {

            text: note.text,
            name: note.name,

        })
    }
    let deleteNote = async () => {

        axios.delete(`http://127.0.0.1:8000/api/notes/${id}/delete/`)
        history('/')

    }
    return (

        <div className='note'>

            <div className='note-header' onClick={(handleSubmit())}>
                <h3> <Link to='/'><ArrowLeft /></Link >

                </h3>
                <input maxlength='23' placeholder="Name" onChange={(e) => { { setNote({ ...note, 'name': e.target.value }) } }} defaultValue={note?.name}></input>
                <Link to='/'>{id !== 'new' ? (<button onClick={deleteNote}>Delete</button>) : (<button onClick={handleAdding}>Add new</button>)}</Link >
            </div>



            <textarea maxlength='4990' onChange={(e) => { { setNote({ ...note, 'text': e.target.value }) } }} defaultValue={note?.text}></textarea>

        </div >
    )
}

export default NotePage
