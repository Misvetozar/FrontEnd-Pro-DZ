import { Button, Paper, TextField } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import { NavLink, useNavigate, useParams } from 'react-router-dom';
import useUser from '../hooks/useUser'




function UserForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {user, saveUser} = useUser(id);


  const [values, setValues] = useState(user);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    validate(user);
    setTouched({});
  }, [user]);

  function onInputChange(e){
    const newValues = {...values, [e.target.name]: e.target.value};

    setValues(newValues);


    validate(newValues);
  }

  function onInputBlur(e){
    setTouched({...touched, [e.target.name]: true });
  }



function onFormSubmit(e){
  e.preventDefault();
  saveUser(values).then(() => navigate('..'));
}
  function validate(values){
    const errors = {};

    if (!values.name){
      errors.name = 'Name is Required'
    }
    if (!values.surname){
      errors.surname = 'Surname is Required'
    }
    if (!values.email){
      errors.email = 'Email is Required'
    }

    setIsValid(!Object.keys(errors).length)
    setErrors(errors);
  }

  return (
    <div><Paper sx={{marginTop: '30px'}}>
      <form onSubmit={onFormSubmit}>
      <TextField error={touched.name && !!errors.name} helperText={touched.name ? errors.name : null} sx={{marginTop: '10px'}} name='name' label="Name" variant='outlined' fullWidth value={values.name} onChange={onInputChange} onBlur={onInputBlur}/>
      <TextField error={touched.surname && !!errors.surname} helperText={touched.surname ? errors.surname : null}  sx={{marginTop: '10px'}} name='surname' label="Surname" variant='outlined' fullWidth value={values.surname} onChange={onInputChange} onBlur={onInputBlur}/>
      <TextField error={touched.email && !!errors.email} helperText={touched.email ? errors.email : null }  sx={{marginTop: '10px'}} name='email' label="Email" variant='outlined' fullWidth value={values.email} onChange={onInputChange} onBlur={onInputBlur}/>
      <Button type='submit'color='primary' variant='contained' disabled={!isValid}>Save</Button>
      <Button to='..' component={NavLink} >Cancel</Button>
      </form>
      </Paper></div>
  )
}

export default UserForm