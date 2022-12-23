import { useEffect, useState } from "react";
import List from "../components/List";
import { deleteUser, getUsers } from "../services/users";

const ListaUsuariosPage = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        setUserList(getUsers());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteHandler = (index) => {
        const newUserList = deleteUser(index);
        setUserList(newUserList);
    }

    return (<>
        <h1>Usuarios</h1>
        <List
            list={userList}
            detailsPath='/usuarios/:id'
            deleteHandler={deleteHandler}
        />
    </>)
}

export default ListaUsuariosPage;