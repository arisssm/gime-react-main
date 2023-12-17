import {Row, Col, Card } from 'react-bootstrap';

const Reccommended = () => {
    return (
        <div className="mt-5">
            <Row>
                <h5 className='mb-3'>Recommended Games</h5>
                <Col lg={3}>
                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                        <Card.Img variant="top" src="../src/assets/image7.png" className='card-image' />
                        <Card.Body>
                            <a href="/detail-page" className="game-title">
                                <h5>Ghost Of Tsushima</h5>
                            </a>
                            <h4 className="cost">IDR 200.000</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                        <Card.Img variant="top" src="../src/assets/image8.png" className='card-image' />
                        <Card.Body>
                            <a href="/detail-page" className="game-title">
                                <h5>Resident Evil : Village</h5>
                            </a>
                            <h4 className="cost">IDR 200.000</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                        <Card.Img variant="top" src="../src/assets/image9.png" className='card-image' />
                        <Card.Body>
                            <a href="/detail-page" className="game-title">
                                <h5>APEX Legends</h5>
                            </a>
                            <h4 className="cost">IDR 200.000</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                        <Card.Img variant="top" src="../src/assets/image10.png" className='card-image' />
                        <Card.Body>
                            <a href="/detail-page" className="game-title">
                                <h5>WWE 2K23</h5>
                            </a>
                            <h4 className="cost">IDR 200.000</h4>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Reccommended;