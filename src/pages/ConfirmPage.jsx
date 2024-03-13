import NavbarComp from "../components/NavbarComp";
import { Container, Row, Col, Breadcrumb, Card, Form} from "react-bootstrap";
import Footer from '../components/Footer';
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import { jwtDecode } from "jwt-decode";

const ConfirmPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [dataBilling, setBilling] = useState([]);
    const [game, setGame] = useState([]);
    const [user, setUser] = useState([]);
    const [payment, setPayment] = useState([]);
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
            setUser(response.data.billing.userId);
            setPayment(response.data.billing.paymentId);
            console.log(response.data.billing);
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
            <div id="confirm" className="mt-3">
                <Container>
                    <Breadcrumb data-bs-theme="dark">
                        <Breadcrumb.Item href="/detailpage/:id">{game.name}</Breadcrumb.Item>
                        <Breadcrumb.Item href="/orderpage/:id">Billing Information</Breadcrumb.Item>
                        <Breadcrumb.Item active>Confirm Payment</Breadcrumb.Item>
                    </Breadcrumb>

                    <Row>
                        <Col>
                            <Card className="mb-4" data-bs-theme="dark" bg="dark">
                                <Row className="g-0">
                                    <Col md={4}>
                                        <img src={`http://127.0.0.1:3000/images/${game.cover}`} className="img-fluid" alt="..." style={{ width: '100%', borderRadius: '20px' }} />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <h4 className="card-title"><b>{game.name}</b></h4>
                                            <p className="card-text"><small className="text-secondary">Cost :</small>
                                                <span><b>IDR {game.price}</b></span>
                                            </p>
                                            <hr />
                                            <Row className="mt-4 mb-4">
                                                <h5 className="text-secondary">Buyer Information</h5>
                                                <Form>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <Form.Label htmlFor="Full Name">Full Name</Form.Label>
                                                            <h5 className="buyer-name mt-3">{user.fullName}</h5>

                                                        </Col>
                                                        <Col lg={6}>
                                                            <Form.Label htmlFor="Phone Number">Phone Number</Form.Label>
                                                            <h5 className="buyer-phone mt-3">{user.phone}</h5>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Row>
                                            <hr />
                                            <h5 className="text-secondary">Payment Method</h5>
                                            <h5 className="payment-method mt-3">{payment.name}</h5>

                                            <Link to={`/scanpage/${id}`}
                                                className="btn btn-outline-light mt-2 mb-1 w-100">Continue</Link>
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

export default ConfirmPage;