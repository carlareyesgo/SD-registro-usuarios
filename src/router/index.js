import RegistroPage from "../pages/RegistroPage";

export const publicRoutes = [
    {
        path: '/',
        element: <h1>Bienvenido</h1>
    },
    {
        path: '/registro',
        element: <RegistroPage />
    },
]