import { Col, Container, Form, Card, Row, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

const NewsPage = () => {
    return (
        <div id="news">
            <NavbarComp />

            <Container>
                <Row>
                    <Col lg={4}>
                        <Form className="d-flex mt-3">
                            <Form.Control type="search" className="me-2" placeholder="Search News" data-bs-theme="dark" />
                            <Button className="btn" type="submit">Search</Button>
                        </Form>
                    </Col>
                </Row>

                <div className="content-news mt-3">
                    <Row>
                        <Col lg={6}>
                            <Card className="mt-3" style={{ width: '100%', background: 'none', color: 'white' }}>
                                <Card.Img src="../src/assets/image-news.png" variant="top" alt="..." />
                                <Card.Body>
                                    <h6><small>Friday, 1 September 2023</small></h6>
                                    <a href="/NewsDetail" className="card-title">
                                        <h5>Modern Warfare III Release Date</h5>
                                    </a>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore recusandae optio ipsam, fugiat
                                        eius nam nemo hic impedit ea commodi.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card className="mt-3" style={{ width: '100%', background: 'none', color: 'white' }}>
                                <Card.Img src="../src/assets/image-news2.png" variant="top" alt="..." />
                                <Card.Body>
                                    <h6><small>Friday, 1 September 2023</small></h6>
                                    <a href="/NewsDetail" className="card-title">
                                        <h5>EA Sports FC 24: cut to the chase</h5>
                                    </a>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore recusandae optio ipsam, fugiat
                                        eius nam nemo hic impedit ea commodi.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card className="mt-3" style={{ width: '100%', background: 'none', color: 'white' }}>
                                <Card.Img src="../src/assets/image-news3.png" variant="top" alt="..." />
                                <Card.Body>
                                    <h6><small>Friday, 1 September 2023</small></h6>
                                    <a href="/NewsDetail" className="card-title">
                                        <h5>Resident Evil 4 PS5 Playthrough</h5>
                                    </a>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore recusandae optio ipsam, fugiat
                                        eius nam nemo hic impedit ea commodi.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card className="mt-3" style={{ width: '100%', background: 'none', color: 'white' }}>
                                <Card.Img src="../src/assets/image-news4.png" variant="top" alt="..." />
                                <Card.Body>
                                    <h6><small>Friday, 1 September 2023</small></h6>
                                    <a href="/NewsDetail" className="card-title">
                                        <h5>Konami Apologizes for eFootball’s Disastrous Launch</h5>
                                    </a>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore recusandae optio ipsam, fugiat
                                        eius nam nemo hic impedit ea commodi.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default NewsPage;