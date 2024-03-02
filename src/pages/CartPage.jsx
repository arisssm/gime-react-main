import NavbarComp from "../components/NavbarComp";
import {Container, Breadcrumb, Row, Col , Card } from "react-bootstrap";
import Footer from '../components/Footer';
const CartPage = () => {
    return (
        <div>
            <NavbarComp />
            <div id="cart" className="mt-5">
                <Container>
                    <Breadcrumb data-bs-theme="dark">
                        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>cart</Breadcrumb.Item>
                    </Breadcrumb>

                    <Row>
                        <Col lg={2}>
                            <Card className="text-center" bg="dark" data-bs-theme="dark">
                                <img src="../src/assets/image8.png" className="card-img-top" alt="..."/>
                                    <Card.Body>
                                        <a href="/DetailPage" className="card-title">
                                            <h6>Resident Evil : Village</h6>
                                        </a>
                                        <h5 className="cost">IDR 200.000</h5>
                                        <a href="/OrderPage" class="btn btn-outline-light mt-3 mb-3">Check Out</a>
                                        <a href="#" className="text-danger">
                                            <p className="text-danger">Delete</p>
                                        </a>
                                    </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={2}>
                            <Card className="text-center" bg="dark" data-bs-theme="dark">
                                <img src="../src/assets/image7.png" className="card-img-top" alt="..."/>
                                    <Card.Body>
                                        <a href="/DetailPage" className="card-title">
                                            <h6>Ghost Of Tsushima</h6>
                                        </a>
                                        <h5 className="cost">IDR 200.000</h5>
                                        <a href="/OrderPage" class="btn btn-outline-light mt-3 mb-3">Check Out</a>
                                        <a href="#" className="text-danger">
                                            <p className="text-danger">Delete</p>
                                        </a>
                                    </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={2}>
                            <Card className="text-center" bg="dark" data-bs-theme="dark">
                                <img src="../src/assets/image9.png" className="card-img-top" alt="..."/>
                                    <Card.Body>
                                        <a href="/DetailPage" className="card-title">
                                            <h6>APEX Legends</h6>
                                        </a>
                                        <h5 className="cost">IDR 200.000</h5>
                                        <a href="/OrderPage" class="btn btn-outline-light mt-3 mb-3">Check Out</a>
                                        <a href="#" className="text-danger">
                                            <p className="text-danger">Delete</p>
                                        </a>
                                    </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default CartPage;