import { useEffect } from "react";

const AboutPage = () => {
    useEffect(()=>{
        document.title = 'SD | Acerca de'
    }, [])
    return (
        <>
            <h1>Bienvenido a mi página!</h1>
            <p>Esta es una página de prueba. Puedes ver el repositorio en este sitio:</p>
            <a href="https://github.com/carlareyesgo/SD-registro-usuarios" target='_blank' rel="noreferrer">Repo</a>
        </>
    )
}

export default AboutPage;