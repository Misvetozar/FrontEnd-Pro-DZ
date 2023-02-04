import { Button, Paper } from '@mui/material'
import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import useUser from '../hooks/useUser'
import {useDispatch} from "react-redux";
import { Form, Formik} from "formik";
import {addUser} from "../../../store/actions/user";
import TextFields from "../../common/components/TextFields";



function UsersForm() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();
  const {user,} = useUser(id);


function onFormSubmit(values){
  dispatch(addUser(values)).then(() => navigate('..'));
}

  return (
    <Paper sx={{marginTop: '30px'}}>
            <Formik initialValues={user} enableReinitialize={true} onSubmit={onFormSubmit} 
                    validateOnMount={true}>
                {({isValid}) => (
                    <Form>
                        <TextFields name="name" label="Name" fullWidth/>
                        <TextFields name="surname" label="Surname" fullWidth/>
                        <TextFields name="email" type="email" label="Email" fullWidth/>
                        <Button type="submit" color='primary' variant="contained" disabled={!isValid}>Save</Button>
                        <Button to=".." component={NavLink}>Cancel</Button>
                    </Form>
                )}
            </Formik>
      </Paper>
  )
}

export default UsersForm