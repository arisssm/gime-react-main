import NavbarComp from "../components/NavbarComp"
import Footer from "../components/Footer"
import { Container, Breadcrumb, Row, Col, Card, Form, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

const OrderPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [dataGame, setData] = useState([]);
    const [user, setUser] = useState({ fullname: '', phone: ''});
    const [dataPayment, setDataPayment] = useState([]);
    const [paymentId, setPaymentId] = useState('');
    // console.log(id);

    const getDetailGame = async() => {
        try{
            const response = await axios.get('http://127.0.0.1:3000/api/game/' + id);
            setData( await response.data.game);
            // console.log(response.data.game.cover);
        } catch(error){
            console.log(error.message);
        }
    }
    const getUser = async() => {
        const decode = jwtDecode(localStorage.getItem('token'));
        setUser(decode);
        // console.log(localStorage.getItem('token'));
        // console.log(decode);
    }
    
    const getPayment = async() => {
        try{
            const response = await axios.get('http://127.0.0.1:3000/api/payment/');
            setDataPayment( await response.data);
            // console.log(response.data);
        } catch(error){
            console.log(error.message);
        }
    }
    
    const postBilling = async(e) => {
        e.preventDefault();
        try{
            const body = {
                gameId : dataGame._id,
                userId : user.userId,
                paymentId : paymentId
            }
            console.log(body);
            const config = {
                headers: {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            }
            // console.log(body);
            const response = await axios.post('http://127.0.0.1:3000/api/billing', body, config);
            console.log(response.data.postData._id);

            const postId = response.data.postData._id;
            if(response.statusText == "OK"){
                navigate('/confirmpage/' + postId);
            }

        } catch(error){
            console.log(error.message);
        }
    }

    const handleSelect = (e) => {
        setPaymentId(e.target.value);
        // console.log(e.target.value);
    }
    useEffect(() => {
        // localStorage.removeItem('token');
        getDetailGame();
        getUser();
        getPayment();
    }, []);
    return (
        <div>
            <NavbarComp/>
            <div id="order" className="mt-3">
                <Container>
                    <Breadcrumb data-bs-theme="dark">
                        <Breadcrumb.Item href={`/detailpage/${id}`}>{dataGame.name}</Breadcrumb.Item>
                        <Breadcrumb.Item active>Billing Information</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Col>
                            <Card className="mb-4" data-bs-theme="dark" bg="dark">
                                <Row className="g-0">
                                    <Col md={4}>
                                        <img src={`http://127.0.0.1:3000/images/${dataGame.cover}`} className="img-fluid" alt="..." style={{ width: '100%', borderRadius: '20px' }} />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <h4 className="card-title"><b>{dataGame.name}</b></h4>
                                            <p className="card-text"><small className="text-secondary">Cost :</small>
                                            </p>
                                            <h5><b>IDR {dataGame.price}</b></h5>
                                            <hr />
                                            <Form onSubmit={postBilling}>
                                                <Row className="mt-4 mb-4">
                                                    <h5 className="text-secondary">Buyer Information</h5>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <Form.Label htmlFor="Full Name">Fulname</Form.Label>
                                                                <Form.Control type="text" value={user.fullname}
                                                                    aria-label="Full Name" readOnly/>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <Form.Label htmlFor="Phone">Phone</Form.Label>
                                                                <Form.Control type="text" value={user.phone}
                                                                    aria-label="Phone" readOnly/>
                                                            </Col>
                                                        </Row>
                                                </Row>
                                            <hr />
                                            <h5 className="text-secondary">Payment Method</h5>
                                                <Form.Select size="sm" onChange={handleSelect}>
                                                    <option value="">--Choose Payment--</option>
                                                    {
                                                        dataPayment.map((data, index) =>(
                                                            <option key={index} value={data._id}>{data.name}</option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            <Button type="submit"
                                                className="btn btn-outline-light mt-2 mb-1 w-100">
                                                    Continue
                                            </Button>
                                            <a><small className="text-secondary">*Please ensure the data entered is correct before
                                                clicking the 'continue' button.</small></a>
                                            </Form>
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