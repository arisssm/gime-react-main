import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import OnSale from "../components/OnSale";
import { Container, Row, Col, Card } from "react-bootstrap";

const SalesPage = () => {
    return (
        <div>
            <NavbarComp />
            <div id="sales">
                <Container>
                    <h5 className='mt-3'>Now On Sale</h5>
                    <OnSale />

                    <div className='special'>
                        <Row>
                            <Col lg={6}>
                                <Card className="bg-dark text-white mt-5">
                                    <Card.Img src="../src/assets/image-sale1.png" alt="Card image" />
                                    <Card.ImgOverlay>
                                        <div className='deskripsi'>
                                            <Card.Title>Mortal Kombat 1</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </Card.Text>
                                            <h4 class="cost">IDR 200.000 </h4>
                                            <a href="/DetailPage" class="btn btn-outline-light mt-3">Buy Now</a>
                                        </div>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card className="bg-dark text-white mt-5">
                                    <Card.Img src="../src/assets/image-sale2.png" alt="Card image" />
                                    <Card.ImgOverlay>
                                        <div className='deskripsi'>
                                            <Card.Title>Assassins Creed : Mirage</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </Card.Text>
                                            <h4 class="cost">IDR 200.000 </h4>
                                            <a href="/DetailPage" class="btn btn-outline-light mt-3">Buy Now</a>
                                        </div>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default SalesPage;