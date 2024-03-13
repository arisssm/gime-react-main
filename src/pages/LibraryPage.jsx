import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Modal, Button, Form} from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useParams, Link } from "react-router-dom";

const LibraryPage = () => {
    const {id} = useParams();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user, setUser] = useState([]);
    const [game, setGame] = useState([]);
    const [library, setLibrary] = useState([]);

    const getUser = async() => {
        try{
            const decode = jwtDecode(localStorage.getItem('token'));
            setUser(decode);
            // console.log(localStorage.getItem('token'));
        } catch(error){
            console.log(error.message);
        }
    }

    const getLibrary = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await axios.get(`http://127.0.0.1:3000/api/library/${id}`, config);
            setLibrary(response.data.library);
            // setGame(response.data.library[0].gameId);
            // setUser(response.data.library[0].userId);
            console.log(response.data.library);
        } catch (error) {
            console.log(error.message);
        }
    }

    `const updateProfile = async() => {
        try{

        } catch(error){

        }
    }`
    
    useEffect(() => {
        getUser();
        getLibrary();
    }, []
    )
    return (
        <div>
            <NavbarComp />
            <div id="account">
                <Container className="mt-5 mb-5">
                    <Row>
                        <Card bg="dark">
                            <Col>
                                <Form.Label className="subtitle" htmlFor="username">Username</Form.Label>
                                <h2 className="username"><b>{user.username}</b></h2>
                                <Form.Label className="subtitle" htmlFor="fullname">Fullname</Form.Label>
                                <h5 className="fullname">{user.fullName}</h5>
                                <Form.Label className="subtitle" htmlFor="phone">Phone</Form.Label>
                                <p className="phone">{user.phone}</p>
                                <Button variant="btn btn-outline-light" onClick={handleShow}>
                                    Edit Info
                                </Button>
                                <Button href="./index.html" variant="btn text-danger">Sign Out</Button>

                                <Modal show={show} onHide={handleClose} centered data-bs-theme="dark">
                                    <Modal.Header closeButton className="bg-dark">
                                        <Modal.Title>Edit Info</Modal.Title>
                                    </Modal.Header>
                                    <Form onSubmit={updateProfile}>
                                        <Modal.Body className="bg-dark">
                                            <Form.Label className="subtitle mb-2" htmlFor="username">Username</Form.Label>
                                            <Form.Control type="text" className="mb-2" placeholder="input username" />
                                            <Form.Label className="subtitle mb-2" htmlFor="fullname">Fullname</Form.Label>
                                            <Form.Control type="text" className="mb-2" placeholder="input fullname" />
                                            <Form.Label className="subtitle mb-2" htmlFor="phone">Phone Number</Form.Label>
                                            <Form.Control type="text" className="mb-2" placeholder="start with 08" />
                                            <Form.Label className="subtitle mb-2" htmlFor="password">Change Password</Form.Label>
                                            <Form.Control type="password" className="mb-2" placeholder="change password" />
                                        </Modal.Body>
                                        <Modal.Footer className="bg-dark">
                                            <Button variant="btn text-danger" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="btn btn-outline-light" type="submit">
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Form>
                                </Modal>
                            </Col>
                        </Card>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    <h5>Libraries</h5> 
                    {library.map((data, index) => (
                    <Col lg={2} key={index}>
                        <Card className="text-center" bg="dark" data-bs-theme="dark">
                            <img src={`http://127.0.0.1:3000/images/${data.gameId.cover}`} className="card-img-top" alt="..." />
                            <Card.Body>
                                <a href={`/DetailPage/${data.gameId.id}`} className="card-title"> {/* Perhatikan bahwa tautan ke DetailPage sekarang mengambil ID permainan */}
                                    <h6>{data.gameId.name}</h6>
                                </a>
                                <h5 className="cost">IDR {data.gameId.price}</h5>
                                <Link to={`/orderpage/${data.gameId.id}`} className="my-3 btn btn-outline-info">Check Out</Link> {/* Perhatikan bahwa tautan ke orderpage sekarang mengambil ID permainan */}
                                <a href="#" className="text-danger">
                                    <p className="text-danger">Delete</p>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default LibraryPage;