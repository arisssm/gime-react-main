import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";

const LoginPage = () => {
    return (
        <div id="login">
            <NavbarComp />

            <Container className="d-flex justify-content-center mt-5">
                <Row>
                    <Col>
                        <div className="bg-login bg-dark" data-bs-theme="dark">
                            <h5>Login</h5>
                            <p>Login to feel the joy!</p>
                            <Form className="mt-5">
                                <label for="username"><b>Username</b></label>
                                <FormControl type="text" className="mb-3" data-bs-theme="dark" />
                                <label for="password">Password</label>
                                <FormControl type="password" data-bs-theme="dark"/>
                                <a href="/" className="d-flex justify-content-end mt-3">Forgot password?</a>
                                <a href="/" class="btn d-flex justify-content-center mt-5">Login</a>
                                <p className="d-flex justify-content-center mt-5">Don't have an account? <a href="/SignupPage">Signup</a>
                                </p>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}

export default LoginPage;