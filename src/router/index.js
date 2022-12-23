import DetalleUsuarioPage from "../pages/DetalleUsuarioPage";
import ListaUsuariosPage from "../pages/ListaUsuariosPage";
import RegistroPage from "../pages/RegistroPage";
import AboutPage from "../pages/AboutPage";
import { Navigate } from "react-router-dom";

export const publicRoutes = [
    {
        path: '/',
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
    {
        path: '/about',
        element: <AboutPage />,
        title: 'Acerca de'
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    },
]