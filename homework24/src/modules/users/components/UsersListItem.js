import React from 'react'

function UsersListItem({ user: {id, name, surname, email}, onDelete } ) {
  return (
    <div className='rows'>
        <div className='place-form'>
        <div className='column '>{name}</div>
        <div className='column'>{surname}</div>
        <div className='column'>{email}</div>
        </div>
        <div className='btns'>

            <button className='btn'>Edit</button>
            <button className='btn' onClick={() => onDelete(id)}>Delete</button>
        </div>
    </div>
  )
}

export default UsersListItem;