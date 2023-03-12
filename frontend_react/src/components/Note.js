import React from 'react'

const Note = ({ note }) => {
    return (
        <div>
            <div className='notes-list-item'>
                <h2>{note.name}:</h2>
                <h3>{note.text.substring(0, 40)}</h3>

            </div>
        </div>
    )
}

export default Note
