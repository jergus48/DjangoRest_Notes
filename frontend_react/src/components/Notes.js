import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Note from './Note'

import { ReactComponent as AddIcon } from '../assets/add.svg';
const Notes = () => {
    let [notes, SetNotes] = useState([])
    useEffect(() => { getnotes() }, [])
    let getnotes = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/notes/')
        let data = await response.json()

        SetNotes(data)
    }
    return (
        <div>
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>
            <div className='notes'>

                <div>
                    {notes.map((note, index) => (

                        <Link to={`/note/${note.id}/`}>
                            <Note note={note} key={index} />
                        </Link>
                    ))}
                </div>
                <Link to='note/new/' className='floating-button'>
                    <AddIcon />

                </Link>
            </div>
        </div>
    )
}

export default Notes
