import React from 'react'
import ListItem from '../ListItem/ListItem'
import './List.css'

function List({ todos, onToggle, onDelete}) {
  return (
    <div className="task-list u-full-width">
      {todos.map((item) => (
        <ListItem
          key={item.id}
          todo={item}
          onToggle={onToggle}
          onDelete={onDelete}/>
      ))}
    </div>
  )
}

export default List