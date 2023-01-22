import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer, Button } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import useUsersList from '../hooks/useUsersList'


function UsersList() {
    const {list, deleteUser} = useUsersList();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Actions</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
            {list.map(item => (
                <TableRow
                key={item.id}>
                     <TableCell>{item.name}</TableCell>
                     <TableCell align="right">{item.surname}</TableCell>
                     <TableCell align="right">{item.email}</TableCell>
                     <TableCell align="right">
                        <Button variant='outlined' to={item.id} component={NavLink}>Edit</Button>
                        <Button variant='outlined' color='error' onClick={() => deleteUser(item.id)}>Delete</Button>
                     </TableCell>
                </TableRow>
            ))}
        </TableBody>


        {/* <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  )
}

export default UsersList