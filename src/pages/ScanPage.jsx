import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { Container, Row, Col, Breadcrumb, Card, Form} from "react-bootstrap"
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import QRCode from "qrcode.react";

const ScanPage = () => {
    const {id} = useParams();
    const [dataBilling, setBilling] = useState([]);
    const [game, setGame] = useState([]);
    const [user, setUser] = useState([]);
    const [payment, setPayment] = useState([]);
    const [paymentSteps, setPaymentSteps] = useState('');
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
            setPaymentSteps(response.data.billing.paymentId.paymentSteps);
            // console.log(response.data.billing.paymentId.paymentSteps);
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
            <div id="scan" className="mt-3">
                <Container>
                    <Breadcrumb data-bs-theme="dark">
                        <Breadcrumb.Item href="/DetailPage">Resident Evil Village</Breadcrumb.Item>
                        <Breadcrumb.Item active>Billing Information</Breadcrumb.Item>
                        <Breadcrumb.Item active>Confirm Payment</Breadcrumb.Item>
                        <Breadcrumb.Item active>Scan to Pay</Breadcrumb.Item>
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
                                            <p className="card-text">
                                                <small className="text-secondary">Cost :</small>
                                            </p>
                                                <p className="card-text fw-bold">IDR {game.price}</p>
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
                                            <Row>
                                                <Col lg={6}>
                                                    <h5 className="text-secondary">Payment Method</h5>
                                                    <h5 className="payment-method mt-3">{payment.name}</h5>
                                                </Col>
                                                <Col lg={6}>
                                                    <h5 className="text-secondary">Billing Code:</h5>
                                                    <h5 className="payment-method mt-3">{dataBilling._id}</h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={6} className="mt-2">
                                                    <h5 className="text-secondary">How to pay :</h5>
                                                    <ul>
                                                    {paymentSteps.split('\n').map((step, index) => (
                                                        <li key={index}>{step}</li>
                                                    ))}
                                                    </ul>
                                                </Col>
                                                <Col lg={3}>
                                                    <QRCode value={id} />
                                                    {/* <img className="qr-code mt-2" src="../src/assets/qr-code.png" alt="" /> */}
                                                </Col>
                                                <Col lg={3} className="my-auto">
                                                    <Link to={`/successpage/${id}`} className="btn btn-outline-light w-100"> Done</Link>
                                                </Col>
                                            </Row>
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

export default ScanPage;