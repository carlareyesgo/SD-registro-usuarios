import RegistroPage from "../pages/RegistroPage";

export const publicRoutes = [
    {
        path: '/',
        element: <h1>Bienvenido</h1>,
        title:'Inicio'
    },
    {
        path: '/registro',
        element: <RegistroPage />,
        title:'Registro'
    },
]