import React from 'react'
import UsersListHeader from './UsersListHeader'
import UsersListItem from './UsersListItem'

function UsersList({ users, onDelete }) {
  return (
    <div>
        <UsersListHeader />
        {
            users.map((item) => (<UsersListItem
              key={item.id}
              user={item}
              onDelete={onDelete}/>))
        }
    </div>
  )
}

export default UsersList