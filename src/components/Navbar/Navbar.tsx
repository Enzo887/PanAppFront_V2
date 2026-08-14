import { Link } from 'react-router-dom'
import estilos from './Narbar.module.css'
import {Navbar, Nav, Container} from 'react-bootstrap'

export function NavbarMain(){
    return(
        <Navbar className={estilos.colorNavbar} expand='lg'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>PanApp</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarNavDropdown'/>
                
                <Navbar.Collapse id="navbarNavDropdown">
                    <Nav>
                        {/*<Nav.Link href='/cuenta' active>Cuenta</Nav.Link>*/}
                        <Nav.Link as={Link} to='/productos'>Productos</Nav.Link>
                        {/* <Nav.Link href='/stock'>Stock</Nav.Link> */}
                        {/* <Nav.Link href='/fiados'>Fiados</Nav.Link> */}
                        <Nav.Link as={Link} to='/historial'>Historial</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}