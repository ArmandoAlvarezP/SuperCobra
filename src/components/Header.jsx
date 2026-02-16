import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <header>
            <Navbar className="header" expand="sm" fixed='top' variant='dark' data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <Row>
                        <Col lg={4} xs={8} md={6} sm={6} >
                            <Image src="/SC_0130.png" width='250px' height='250px'/>
                        </Col>
                    </Row>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="#merch">Merch</Nav.Link>
                    <Nav.Link href="#musica">Música</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header