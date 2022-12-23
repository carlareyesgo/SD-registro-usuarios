import List from "../components/List";

const ListaUsuariosPage = () => {
    return (<>
        <h1>Usuarios</h1>
        <List list={[
            {
                "nombre": "safsdfadfs",
                "apellido-paterno": "safasdf",
                "apellido-materno": "asdfasdf",
                "telefono": "1231231123",
                "correo": "asad@assad.com",
                "genero": "M"
            },
            {
                "nombre": "sadfasdf",
                "apellido-paterno": "sadfasdf",
                "apellido-materno": "sdfasfd",
                "telefono": "2312312321",
                "correo": "asdf@asdf.sadf",
                "genero": "F"
            }
        ]} />
    </>)
}

export default ListaUsuariosPage;