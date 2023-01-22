import { Button, Paper, TextField } from '@mui/material'
import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import useUser from '../hooks/useUser'



function UsersForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {user, changeUser, saveUser} = useUser(id);

  function onInputChange(e){
    changeUser({
    [e.target.name]: e.target.value,
    })
  }

function onFormSubmit(e){
  e.preventDefault();
  // console.log('save', user)
  // navigate('..')
  saveUser(user).then(() => navigate('..'))
}

  return (
    <div><Paper sx={{marginTop: '30px'}}>
      <form onSubmit={onFormSubmit}>
      <TextField sx={{marginTop: '10px'}} name='name' label="Name" variant='outlined' fullWidth value={user.name} onChange={onInputChange}/>
      <TextField sx={{marginTop: '10px'}} name='surname' label="Surname" variant='outlined' fullWidth value={user.surname} onChange={onInputChange}/>
      <TextField sx={{marginTop: '10px'}} name='email' label="Email" variant='outlined' fullWidth value={user.email} onChange={onInputChange}/>
      <Button type='submit'color='primary' variant='contained'>Save</Button>
      <Button to='..' component={NavLink}>Cancel</Button>
      </form>
      </Paper></div>
  )
}

export default UsersForm