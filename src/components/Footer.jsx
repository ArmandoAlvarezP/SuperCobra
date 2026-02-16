import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
const Footer = () => {
  return (
    <footer>
        <Navbar className='footer' variant="dark">
        <Container>
            <Nav className="me-auto">
                <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                <Nav.Link href="#merch">Merch</Nav.Link>
                <Nav.Link href="#musica">Música</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    </footer>
  )
}

export default Footer