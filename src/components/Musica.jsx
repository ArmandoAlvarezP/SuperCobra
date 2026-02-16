import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Musica = () => {
  return (
    <>
        <section id="musica" className="musica">
            <Container>
                <Row>
                    <Col>
                        <iframe data-testid="embed-iframe" style={{borderRadius:'12px'}} 
                            src="https://open.spotify.com/embed/artist/79kB2wRealQ7TgVXSyFp6D?utm_source=generator&theme=0" 
                            width="100%" height="352" frameBorder="0" allowfullscreen="" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"
                        >
                        </iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Musica