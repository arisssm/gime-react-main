import {Row, Col, Card} from "react-bootstrap";

const OnSale = () => {
    return (
        <div>
            <Row>
                <Col lg={4}>
                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                        <Card.Img variant="top" src="../src/assets/image4.png" className='card-image' />
                        <Card.Body>
                            <a href="/DetailPage" className="game-title">
                                <h5>Resident Evil 4</h5>
                            </a>
                            <h6 className="subtitle">on sale</h6>
                            <h4 className="cost">IDR 200.000</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                        <Card.Img variant="top" src="../src/assets/image5.png" className='card-image' />
                        <Card.Body>
                            <a href="/DetailPage" className="game-title">
                                <h5>The Last Of Us Part II</h5>
                            </a>
                            <h6 className="subtitle">on sale</h6>
                            <h4 className="cost">IDR 200.000</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                        <Card.Img variant="top" src="../src/assets/image6.png" className='card-image' />
                        <Card.Body>
                            <a href="/DetailPage" className="game-title">
                                <h5>Dying Light 2</h5>
                            </a>
                            <h6 className="subtitle">on sale</h6>
                            <h4 className="cost">IDR 200.000</h4>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default OnSale;