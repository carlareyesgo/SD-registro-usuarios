import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "../components/List";
import { deleteUser, getUsers } from "../services/users";
import { buildNotification } from "../utils";

const ListaUsuariosPage = () => {
    const navigation = useNavigate();
    const [userList, setUserList] = useState([]);
    const [show, setShow] = useState(false);

    const showHandle = () => setShow(true);
    const closeHandle = () => setShow(false);

    useEffect(() => {
        const users = getUsers();
        if (!users.length) {
            buildNotification({
                title: 'Aún no hay usuarios',
                type: 'danger',
                message: 'Agrega tu primer usuario.',
            })
            navigation('/')
        }
        setUserList(users);
        document.title = 'SD | Usuarios'
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
        setShow(false)
        if (!newUserList.length) {
            navigation('/')
        }
    }

    return (<>
        <h1>Usuarios</h1>
        <List
            list={userList}
            detailsPath='/usuarios/:id'
            deleteHandler={deleteHandler}
            show={show}
            showHandle={showHandle}
            closeHandle={closeHandle}
        />
    </>)
}

export default ListaUsuariosPage;