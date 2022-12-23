import { useEffect, useState } from "react";
import List from "../components/List";
import { deleteUser, getUsers } from "../services/users";
import { buildNotification } from "../utils";

const ListaUsuariosPage = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        setUserList(getUsers());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteHandler = (index) => {
        const newUserList = deleteUser(index);
        setUserList(newUserList);
        buildNotification({
            title: 'Eliminado correctamente',
            type: 'danger',
            message: 'Se ha eliminado al usuario.',
        })
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