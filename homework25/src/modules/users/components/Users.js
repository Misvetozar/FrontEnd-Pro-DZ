import React, { useEffect, useState } from 'react'
import UsersList from './UsersList'
import UserForm from './UserForm'
import useUsers from '../hooks/useUsers';

function Users() {
  const {users, deleteUser, saveUser} = useUsers();
  return (
    <div>
      <UsersList users= {users} onDelete={deleteUser}/>
      <UserForm onSave={saveUser}/>
    </div>
  )
}

export default Users;