import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { Col, Container, Form, FormControl, Row, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMessage] = useState('');
    const navigate = useNavigate();
    

    const login = async (e) => 
    {
        e.preventDefault();
        try{
            const data = {
                username: username,
                password: password,
            };
            const res = await axios.post('http://127.0.0.1:3000/api/login', data);
            const decode = jwtDecode(res.data.token);
                console.log(decode);
                console.log(res.data);
            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch(error){
            if(error.response){
                // console.log(error.response.data.message);
                setMessage(error.response.data.message);
            }
        }

    }
    const alert = () => 
    {
        if (msg != '')
        {
            return(
                <Alert variant="danger">
                    {msg}
                </Alert>
            );
        }
    }
    return (
        <div id="login">
            <NavbarComp />

            <Container className="d-flex justify-content-center mt-5">
                <Row>
                    <Col>
                        <div className="bg-login bg-dark" data-bs-theme="dark">
                            <h5>Login</h5>
                            <p>Login to feel the joy!</p>
                            <Row className="mt-5">
                                {alert()}
                            </Row>
                            <Form onSubmit={login}>
                                <Row>
                                    <label htmlFor="username"><b>Username</b></label>
                                    <FormControl type="text" className="mb-3" data-bs-theme="dark" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </Row>
                                <Row>
                                    <label htmlFor="password">Password</label>
                                    <FormControl type="password" data-bs-theme="dark" value={password} onChange={(e) => setPassword(e.target.value) }/>
                                </Row>
                                <a href="/" className="d-flex justify-content-end mt-3">Forgot password?</a>
                                <Button type="submit" className="btn d-flex justify-content-center mt-5">Login</Button>
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