import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import FreeGame from "../components/FreeGame";
import { Container, Col, Row, Card } from "react-bootstrap";

const SuccessPage = () => {
    return (
        <div>
            <NavbarComp/>
            <div id="success">
                <Container>
                    <Row className="mt-3">
                        <Col>
                            <h1>Congratulation!</h1>
                            <p>You have successfully paid this game, You can download and play the game now!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="mt-3 mb-4" data-bs-theme="dark" bg="dark">
                                <Row className="g-0">
                                    <Col md={2}>
                                        <img src="../src/assets/image8.png" className="img-fluid" alt="..." />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <h4 className="card-title mt-3"><b>Resident Evil Village</b></h4>
                                            <table className="mt-3">
                                                <tr>
                                                    <th>Cost</th>
                                                    <th>Status</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5>IDR 200.000</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="status">Paid</h5>
                                                    </td>
                                                </tr>
                                            </table>
                                            <Row className="mt-5">
                                                <Col>
                                                    <h6><b>Download this game now?</b></h6>
                                                    <a href="#" className="btn download">Download Now</a>
                                                    <a href="/LibraryPage" className="btn btn-outline-light">Download Later</a>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                            <p>*Note : Your game is automatically added to your library</p>
                        </Col>
                    </Row>

                    <Row>

                        <h5 className='mb-3 mt-5'>You may also like</h5>
                        <FreeGame />
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default SuccessPage;