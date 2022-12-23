import DetalleUsuarioPage from "../pages/DetalleUsuarioPage";
import ListaUsuariosPage from "../pages/ListaUsuariosPage";
import RegistroPage from "../pages/RegistroPage";

export const publicRoutes = [
    {
        path: '/',
        element: <h1>Bienvenido</h1>,
        title: 'Inicio'
    },
    {
        path: '/registro',
        element: <RegistroPage />,
        title: 'Registro'
    },
    {
        path: '/usuarios',
        element: <ListaUsuariosPage />,
        title: 'Lista de Usuarios'
    },
    {
        path: '/usuarios/:id',
        element: <DetalleUsuarioPage />,
    },
]