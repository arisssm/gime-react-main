import { useEffect, useState } from "react";
import NavbarComp from "../components/NavbarComp";
// import FreeGame from "../components/FreeGame";
import { Nav, Container, Row, Col, Modal, Button, Form, Table } from "react-bootstrap";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

/**
 * Catatan:
 * 
 */

const DetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    /* ==== Get Game ==== */
    const [detailGame, setDetail] = useState([]);
    const [detailSpec, setSpecification] = useState([]);
    // const [spec, setSpec] = useState('');
    /* ==== Login  ==== */
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    /* ==== Modal ==== */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (localStorage.getItem('token')) {
            navigate('/orderpage/' + id);
        } else {
            setShow(true);
        }
    }
    /* ==== Function ==== */
    const modalLogin = async (e) => 
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
            navigate('/orderpage/' + id);
        } catch(error){
            if(error.response){
                // console.log(error.response.data.message);
                setMessage(error.response.data.message);
            }
        }

    }
    // console.log(localStorage.getItem('token'));

    const getDetailGame = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3000/api/game/' + id);
            setDetail(await response.data.game);
            setSpecification(await response.data.game.specificationId);
            // console.log(response.data.game.isFreeGame);
        } catch (error) {
            console.log(error.message);
        }
    }

    /* ==== Render Function ==== */
    useEffect(() => {
        // localStorage.removeItem('token');
        getDetailGame();
    }, []);
    return (
        <div>
            <NavbarComp />
            <div id="detail">
                <Container className="mt-5">
                    <Nav aria-label="breadcrumb" data-bs-theme="dark">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {detailGame.name}
                            </li>
                        </ol>
                    </Nav>
                    <Row>
                        <Col lg={4}>
                            <img src={`http://127.0.0.1:3000/images/${detailGame.cover}`} alt="" />
                        </Col>
                        <Col lg={8}>
                            <h1>{detailGame.name}</h1>
                            {/* {console.log("Is Free Game:", detailGame.isFreeGame)} */}
                            {detailGame.isFreeGame === true ? (
                                    <h2 className="cost mb-3">IDR Free</h2>
                                ) : (
                                    <h2 className="cost mb-3">IDR {detailGame.price}</h2>
                                )
                            }
                            <h6>about game</h6>
                            <p>
                                {detailGame.description}
                            </p>
                            <h6 className="mt-3">Spec Requirement</h6>
                            {detailSpec.map((specification, index) => (
                                <div key={index}>
                                    {(specification.category === 'req') && <p><b> Reccommended :</b></p>}
                                    {(specification.category === 'min') && <p><b> Minimum :</b></p>}
                                    <Table variant="dark" borderless>
                                        <thead>
                                            <tr>
                                                <th>Os</th>
                                                <th>Proccessor</th>
                                                <th>Memory</th>
                                                <th>Graphic</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{specification.os}</td>
                                                <td>{specification.processor}</td>
                                                <td>{specification.memory}</td>
                                                <td>{specification.graphic}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            ))}
                            <div className="trigger mt-5">
                                <Row>
                                    <Col lg={6}>
                                        <Button variant="primary" className="btn buy" onClick={handleShow}>
                                            Buy Now
                                        </Button>
                                    </Col>
                                    <Col lg={6}>
                                        <Button variant="outline-light" onClick={handleShow}>
                                            Add to cart
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                            <Modal show={show} onHide={handleClose} size="md" centered data-bs-theme="dark">
                                <div className="modal-content bg-dark" style={{ padding: '30px', }}>
                                    <Modal.Body className="bg-dark">
                                        <Modal.Header closeButton style={{ borderBottom: 'none', }}></Modal.Header>
                                        <h5>Login</h5>
                                        <p className="text-secondary mb-5">
                                            Login to download this game
                                        </p>

                                        <Form onSubmit={modalLogin}>
                                            <Form.Label htmlFor="username">Username</Form.Label>
                                            <Form.Control type="text" className="mb-3" placeholder="input username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                            <Form.Label htmlFor="password">Password</Form.Label>
                                            <Form.Control type="password" placeholder="input password" value={password} onChange={(e) => setPassword(e.target.value) } />
                                            <Link to="/signuppage" className="d-flex justify-content-end mt-3">Forgot password?</Link>
                                            <Button type="submit" className="mt-5 mb-5"
                                                style={{
                                                    backgroundColor: '#a555ed',
                                                    width: '50%',
                                                    margin: 'auto',
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                Login
                                            </Button>
                                        </Form>
                                        <p className="d-flex justify-content-center">
                                            Don't have an account?
                                            <Link to="/SignupPage">Sign Up</Link>
                                        </p>
                                    </Modal.Body>
                                </div>
                            </Modal>
                        </Col>
                    </Row>
                    {/* <Row>
                        <FreeGame />
                    </Row> */}
                    <Row className="mt-5">
                        <Col>
                            <h5>Game Trailer</h5>
                            <iframe
                                style={{
                                    borderRadius: '20px',
                                    width: '100%',
                                    height: '500px',
                                }}
                                // src={`https://youtube.com/embed/${detailGame.trailer}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default DetailPage;