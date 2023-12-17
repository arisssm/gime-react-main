import { Col, Container, Row, Accordion } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

const AboutPage = () => {
    return (
        <div>
            <NavbarComp />
            <div id="about">
                <Container className="mt-3">
                    <Row>
                        <Col>
                            <div className="bio">
                                <h1><b>about gime</b></h1>
                                <hr />
                                <h5><b>Corporate Headquarters</b></h5>
                                <h6><b>Palembang, Indonesia</b></h6>
                                <p>
                                    Founded in 2023, Gime is an Indonesian company founded by CEO
                                    Joni. The company is headquartered in Rajawali, Palembang and
                                    has more than 40 offices worldwide. Today Gime is a leading
                                    interactive entertainment company and provider of 3D engine
                                    technology.
                                </p>
                            </div>
                            <div className="contact">
                                <hr />
                                <h5><b>Contact</b></h5>
                                <h6><b>Gime Inc</b></h6>
                                <p>Street Rajawali. Palembang, Indonesia, Tel +1 234 567</p>
                            </div>
                            <div className="faq">
                                <hr />
                                <h5><b>Frequently Ask Question</b></h5>

                                <Accordion defaultActiveKey="0" bg="dark" data-bs-theme="dark" className="mt-3">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Does Gime have any job opening?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes! Our current openings will be posted on our career
                                            portal. Once registered, you may apply for open positions
                                            and/or submit your resume.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>I am having trouble with my game. Where do I go for
                                            support?</Accordion.Header>
                                        <Accordion.Body>
                                            Please Contact us at email support@gime.com for support on
                                            all of our current products.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Does the Gime Games Store support regional pricing?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes, we do support regional pricing in more than 190
                                            countries and over 30 territories. We also provide
                                            suggested regional prices for developers based on regional
                                            exchange rates, local purchasing power, and industry
                                            experience.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </div>
    );
}

export default AboutPage;