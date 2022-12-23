import { useEffect, useState } from "react";
import List from "../components/List";
import { getUsers } from "../services/users";

const ListaUsuariosPage = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        setUserList(getUsers());
    }, []);

    return (<>
        <h1>Usuarios</h1>
        <List list={userList} detailsPath='/usuarios/:id'/>
    </>)
}

export default ListaUsuariosPage;