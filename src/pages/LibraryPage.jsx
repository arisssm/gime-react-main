import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Modal, Button, Form} from "react-bootstrap";
import { useState } from "react";

const LibraryPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <NavbarComp />
            <div id="account">
                <Container className="mt-5 mb-5">
                    <Row>
                        <Card bg="dark">
                            <Col>
                                <Form.Label className="subtitle" htmlFor="username">Username</Form.Label>
                                <h2 className="username"><b>Jhon_Doer2023</b></h2>
                                <Form.Label className="subtitle" htmlFor="fullname">Fullname</Form.Label>
                                <h5 className="fullname">Jhon Doe</h5>
                                <Form.Label className="subtitle" htmlFor="phone">Phone</Form.Label>
                                <p className="phone">0812345678</p>
                                <Button variant="btn btn-outline-light" onClick={handleShow}>
                                    Edit Info
                                </Button>
                                <Button href="./index.html" variant="btn text-danger">Sign Out</Button>

                                <Modal show={show} onHide={handleClose} centered data-bs-theme="dark">
                                    <Modal.Header closeButton className="bg-dark">
                                        <Modal.Title>Edit Info</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="bg-dark">
                                        <Form>
                                            <Form.Label className="subtitle mb-2" htmlFor="username">Username</Form.Label>
                                            <Form.Control type="text" className="mb-2" placeholder="input username" />
                                            <Form.Label className="subtitle mb-2" htmlFor="fullname">Fullname</Form.Label>
                                            <Form.Control type="text" className="mb-2" placeholder="input fullname" />
                                            <Form.Label className="subtitle mb-2" htmlFor="phone">Phone Number</Form.Label>
                                            <Form.Control type="text" className="mb-2" placeholder="start with 08" />
                                            <Form.Label className="subtitle mb-2" htmlFor="password">Change Password</Form.Label>
                                            <Form.Control type="password" className="mb-2" placeholder="change password" />
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer className="bg-dark">
                                        <Button variant="btn text-danger" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="btn btn-outline-light" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Col>
                        </Card>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    <h5>Libraries</h5>
                    <Col lg={2}>
                        <Card className="text-center" bg="dark" data-bs-theme="dark">
                            <img src="../src/assets/image8.png" className="card-img-top" alt="..." />
                            <Card.Body>
                                <a href="/DetailPage" className="card-title">
                                    <h6>Resident Evil : Village</h6>
                                </a>
                                <h5 className="cost">IDR 200.000</h5>
                                <a href="/OrderPage" className="btn btn-outline-light mt-3 mb-3">Check Out</a>
                                <a href="#" className="text-danger">
                                    <p className="text-danger">Delete</p>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={2}>
                        <Card className="text-center" bg="dark" data-bs-theme="dark">
                            <img src="../src/assets/image7.png" className="card-img-top" alt="..." />
                            <Card.Body>
                                <a href="/DetailPage" className="card-title">
                                    <h6>Ghost Of Tsushima</h6>
                                </a>
                                <h5 className="cost">IDR 200.000</h5>
                                <a href="/OrderPage" className="btn btn-outline-light mt-3 mb-3">Check Out</a>
                                <a href="#" className="text-danger">
                                    <p className="text-danger">Delete</p>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={2}>
                        <Card className="text-center" bg="dark" data-bs-theme="dark">
                            <img src="../src/assets/image9.png" className="card-img-top" alt="..." />
                            <Card.Body>
                                <a href="/DetailPage" className="card-title">
                                    <h6>APEX Legends</h6>
                                </a>
                                <h5 className="cost">IDR 200.000</h5>
                                <a href="/OrderPage" className="btn btn-outline-light mt-3 mb-3">Check Out</a>
                                <a href="#" className="text-danger">
                                    <p className="text-danger">Delete</p>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default LibraryPage;