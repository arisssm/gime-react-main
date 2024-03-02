import NavbarComp from "../components/NavbarComp"
import Footer from "../components/Footer"
import { Container, Breadcrumb, Row, Col, Card, Form } from "react-bootstrap"

const OrderPage = () => {
    return (
        <div>
            <NavbarComp/>
            <div id="order" className="mt-3">
                <Container>
                    <Breadcrumb data-bs-theme="dark">
                        <Breadcrumb.Item href="/DetailPage">Resident Evil Village</Breadcrumb.Item>
                        <Breadcrumb.Item active>Billing Information</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Col>
                            <Card className="mb-4" data-bs-theme="dark" bg="dark">
                                <Row className="g-0">
                                    <Col md={4}>
                                        <img src="../src/assets/image8.png" class="img-fluid" alt="..." style={{ width: '100%', borderRadius: '20px' }} />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <h4 className="card-title"><b>Resident Evil Village</b></h4>
                                            <p className="card-text"><small className="text-secondary">Cost :</small>
                                                <h5><b>IDR 200.000</b></h5>
                                            </p>
                                            <hr />
                                            <Row className="mt-4 mb-4">
                                                <h5 className="text-secondary">Buyer Information</h5>
                                                <Form>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <Form.Label for="Full Name">Full Name</Form.Label>
                                                            <Form.Control type="text" placeholder="Full Name"
                                                                aria-label="Full Name" />
                                                        </Col>
                                                        <Col lg={6}>
                                                            <Form.Label for="Phone Number">Phone Number</Form.Label>
                                                            <Form.Control type="text" placeholder="Phone Number"
                                                                aria-label="Phone Number" />
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Row>
                                            <hr />
                                            <h5 className="text-secondary">Payment Method</h5>
                                            <Form>
                                                {['radio'].map((type) => (
                                                    <div key={`default-${type}`} className="mt-3 mb-3">
                                                        <Form.Check
                                                            type={type}
                                                            id={`default`}
                                                            label={`Gopay`}
                                                        />
                                                        <Form.Check
                                                            type={type}
                                                            id={`default`}
                                                            label={`Ovo`}
                                                        />
                                                        <Form.Check
                                                            type={type}
                                                            id={`default`}
                                                            label={`Indomaret`}
                                                        />
                                                    </div>
                                                ))}
                                            </Form>

                                            <a href="/ConfirmPage"
                                                className="btn btn-outline-light mt-2 mb-1 w-100">Continue</a>
                                            <a><small className="text-secondary">*Please ensure the data entered is correct before
                                                clicking the 'continue' button.</small></a>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div >
    );
}

export default OrderPage;