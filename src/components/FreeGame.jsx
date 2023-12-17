import {Row, Col, Card } from 'react-bootstrap';

const FreeGame = () => {
    return (
        <div className='mt-5'>
            <Row>
                <h5 className='mb-3'>Top Free Games</h5>
                <Col lg={3}>
                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                        <Card.Img variant="top" src="../src/assets/image14.png" className='card-image' />
                        <Card.Body>
                            <a href="/detail-page" className="game-title">
                                <h5>Asphalt 9 Legends</h5>
                            </a>
                            <h4 className="cost">Free</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                        <Card.Img variant="top" src="../src/assets/image15.png" className='card-image' />
                        <Card.Body>
                            <a href="/detail-page" className="game-title">
                                <h5>League Of Legends</h5>
                            </a>
                            <h4 className="cost">Free</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                        <Card.Img variant="top" src="../src/assets/image16.png" className='card-image' />
                        <Card.Body>
                            <a href="/detail-page" className="game-title">
                                <h5>Warriors Orochi 4</h5>
                            </a>
                            <h4 className="cost">Free</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                        <Card.Img variant="top" src="../src/assets/image17.png" className='card-image' />
                        <Card.Body>
                            <a href="/detail-page" className="game-title">
                                <h5>Efootball 2023</h5>
                            </a>
                            <h4 className="cost">Free</h4>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default FreeGame;