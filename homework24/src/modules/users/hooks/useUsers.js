import React, { useEffect, useState } from 'react'
import usersService from '../services/usersService';


export default function useUsers(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getList().then(setUsers);
    }, []);

    function deleteUser(id) {
        usersService.delete(id).then(() =>{
            setUsers(users.filter((item) => item.id !== id));
    });
    }

    function saveUser(user){
        if (user.id) {
            updateUser(user)
        } else {
        createUser(user)
        }
    }

    function updateUser(user){
        usersService.update(user).then((data) => {
            setUsers(users.map((item) =>
             (item.id === data.id ? data :item)));
        })
    }

    function createUser(user){
        usersService.create(user).then((data) => {
            setUsers([...users, data]);
        });
    }


    return {
        deleteUser,
        saveUser,
        users,
    };
}