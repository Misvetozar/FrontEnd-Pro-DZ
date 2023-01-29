import React from 'react'
import { useSelector } from 'react-redux'
import { selectList } from '../../store/selectors/todos';
import ListItem from '../ListItem/ListItem'
import './List.css'

function List() {
  const todos = useSelector(selectList) ;
  
  return (
    <div className="task-list u-full-width">
      {todos.map((item) => (
        <ListItem
          key={item.id}
          todo={item}
          />
      ))}
    </div>
  )
}

export default List