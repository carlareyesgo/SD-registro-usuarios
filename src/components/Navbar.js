import { useState } from 'react';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../router';

const NavbarComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);


    return (
        <Navbar bg="light" className="mb-3" expand='lg' collapseOnSelect>
            <Container fluid>
                <Navbar.Brand href="#">Salud Digna</Navbar.Brand>
                <Navbar.Toggle aria-controls={`main-nav`} onClick={toggleMenu} />
                <Navbar.Offcanvas
                    id={`main-nav`}
                    aria-labelledby={`main-nav-label`}
                    restoreFocus={false}
                    show={menuOpen}
                    onHide={toggleMenu}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`main-nav-label`}>
                            Salud Digna
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            {publicRoutes.map(route => <Nav.Link as={Link} to={route.path} onClick={toggleMenu}>{route.title}</Nav.Link>)}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;