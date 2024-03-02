import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import { Container, Col, Row, Form } from "react-bootstrap";

const SignupPage = () => {
    return (
        <div>
            <NavbarComp />
            <div id="signup">
                <Container className="d-flex justify-content-center">
                    <Row>
                        <Col>
                            <div className="bg-signup bg-dark" data-bs-theme="dark">
                                <h5>Sign Up</h5>
                                <p>Make an account to find the joy!</p>
                                <Form>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Label for="fullname"><b>Full Name</b></Form.Label>
                                            <Form.Control type="text" className="mb-3" data-bs-theme="dark" />
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Label for="phone"><b>Phone Number</b></Form.Label>
                                            <Form.Control type="text" className="mb-3" data-bs-theme="dark" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Label for="Email"><b>Email</b></Form.Label>
                                            <Form.Control type="text" className="mb-3" data-bs-theme="dark" />
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Label for="password"><b>Make a password</b></Form.Label>
                                            <Form.Control type="" className="mb-3" data-bs-theme="dark" />
                                        </Col>
                                    </Row>
                                </Form>
                                <a href="/" className="btn d-flex justify-content-center mt-5">Signup</a>
                                <p className="d-flex justify-content-center mt-5">Don't have an account? <a href="/LoginPage">Login</a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default SignupPage;