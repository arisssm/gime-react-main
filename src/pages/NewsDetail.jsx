import { Container, Row, Col, Card } from "react-bootstrap"
import NavbarComp from "../components/NavbarComp"
import Footer from "../components/Footer"

const NewsDetail = () => {
    return (
        
        <div id="news-detail">
            <NavbarComp/>
            <Container 
                className="mt-5">
                <Row>
                    <Col>
                    <div 
                        className="gambar-background mb-5"
                        style={{background: 'url(../src/assets/image-news.png)', backgroundSize: 'cover', height: '500px', borderRadius: '20px'}} 
                        alt="" 
                    >        
                    </div>
                    <h1><b>WORLDWIDE REVEAL: ANNOUNCING CALL OF DUTY: MODERN WARFARE III</b></h1>
                    <p 
                        className="card-text"
                    >
                        Friday, 1 September 2023</p>
                    </Col>
                </Row>
                    <Col 
                        className="mt-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore quia minus eaque ex? Fugiat nostrum
                        sit incidunt saepe neque corporis vitae unde voluptatum! Distinctio, vel dolores. Sed, blanditiis temporibus
                        tenetur accusantium iure et ipsam dolores perspiciatis vero excepturi id maxime illo numquam ipsum expedita,
                        quidem rem. Nobis rem quidem, molestias quis fugit suscipit quod perspiciatis nostrum voluptatem reiciendis
                        natus.</p>
                    </Col>
                    <Col 
                        className="mt-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore quia minus eaque ex? Fugiat nostrum
                        sit incidunt saepe neque corporis vitae unde voluptatum! Distinctio, vel dolores. Sed, blanditiis temporibus
                        tenetur accusantium iure et ipsam dolores perspiciatis vero excepturi id maxime illo numquam ipsum expedita,
                        quidem rem. Nobis rem quidem, molestias quis fugit suscipit quod perspiciatis nostrum voluptatem reiciendis
                        natus.</p>
                    </Col>
                    <Col 
                        className="mt-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore quia minus eaque ex? Fugiat nostrum
                        sit incidunt saepe neque corporis vitae unde voluptatum! Distinctio, vel dolores. Sed, blanditiis temporibus
                        tenetur accusantium iure et ipsam dolores perspiciatis vero excepturi id maxime illo numquam ipsum expedita,
                        quidem rem. Nobis rem quidem, molestias quis fugit suscipit quod perspiciatis nostrum voluptatem reiciendis
                        natus.</p>
                    </Col>
                <div 
                    className="more-news mt-3">
                    <Row>
                    <h5><b>More News</b></h5>
                        <Col lg={6}>
                            <Card 
                            className="mt-3" 
                            style={{ width: '100%', background: 'none', color: 'white'}} 
                            data-bs-theme="dark">
                                <Card.Img variant="top" src="../src/assets/image-news3.png" className='card-image' />
                                <Card.Body>
                                    <h6><small>Friday, 1 September 2023</small></h6>
                                    <a 
                                        href="/NewsDetail">
                                        <h5 className="card-title">Resident Evil 4 PS5 Playthrough</h5>
                                    </a>
                                    <p className="card-text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore recusandae optio ipsam, fugiat
                                        eius nam nemo hic impedit ea commodi.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card 
                            className="mt-3" 
                            style={{ width: '100%', background: 'none', color: 'white'}} 
                            data-bs-theme="dark">
                                <Card.Img variant="top" src="../src/assets/image-news4.png" className='card-image' />
                                <Card.Body>
                                    <h6><small>Friday, 1 September 2023</small></h6>
                                    <a 
                                        href="/NewsDetail">
                                        <h5 className="card-title">Konami Apologizes for eFootball’s Disastrous Launch</h5>
                                    </a>
                                    <p className="card-text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore recusandae optio ipsam, fugiat
                                        eius nam nemo hic impedit ea commodi.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                
                    </Row>
                </div>
            </Container>
            <Footer/>
        </div>
    )
}

export default NewsDetail;