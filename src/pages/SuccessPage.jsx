import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import FreeGame from "../components/FreeGame";
import { Container, Col, Row, Card, Table, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SuccessPage = () => {
    const {id} = useParams();
    const [dataBilling, setBilling] = useState([]);
    const [game, setGame] = useState([]);
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');
    const getBilling = async() => {
        try{
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await axios.get(`http://127.0.0.1:3000/api/billing/` + id, config);
            setBilling(response.data.billing);
            setGame(response.data.billing.gameId);
            setUser(response.data.billing.userId._id);
            setUserId(response.data.billing.userId._id);
            // console.log(response.data.billing);
        } catch(error){
            console.log(error.message);
        }
    }

    const postGameLibrary = async(e) => {
        e.preventDefault();
        try{
            const body = {
                gameId : game._id,
                userId : userId
            }
            console.log(body);
            const config = {
                headers: {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            }
            const response = await axios.post('http://127.0.0.1:3000/api/library', body, config);
            console.log(response);
            // const Id = response.data.postLibary.userId;
            // if(response.statusText == "OK"){
            //     navigate('/librarypage/' + Id);
            // }

        } catch(error){
            console.log(error.message);
        }
    }

    useEffect(() => {
        getBilling();
    }, [])
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
                                        <img src={`http://127.0.0.1:3000/images/${game.cover}`} className="img-fluid" alt="..." />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <h4 className="card-title mt-3"><b>{game.name}</b></h4>
                                            <Table className="mt-3">
                                                <thead>
                                                    <tr>
                                                        <th>Cost</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="pt-3">
                                                    <tr>
                                                        <td className="pt-3">
                                                        { 
                                                            game.isFreeGame === true ? (
                                                                <h5>IDR Free</h5>
                                                            ) : (
                                                                <h5>IDR {game.price}</h5>
                                                            )
                                                        }
                                                        </td>
                                                        <td className="pt-3">
                                                            <h5 className="status">Paid</h5>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Row className="mt-5">
                                                <Col>
                                                    <h6><b>Download this game now?</b></h6>
                                                    <a href="#" className="btn download">Download Now</a>
                                                    <Button onClick={postGameLibrary} variant="outline-light">Download Later</Button>
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