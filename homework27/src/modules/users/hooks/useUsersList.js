import {useState, useEffect} from 'react';
import api from '../../../api';

export default function useUsersList(){
    const [list, setList] = useState([])

    useEffect(() => {
        fetchUsers();
    }, []);

    function fetchUsers() {
        api.get('users').then(({ data }) => setList(data));
    }

   function deleteUser(id) {
        api.delete('users/' +id).then(() => {
            fetchUsers();
        });
    }

    return {list, deleteUser, fetchUsers};
}