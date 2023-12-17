import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark mt-5" data-bs-theme="dark">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="link">
                            <h6 className="subtitle">quick link</h6>
                            <ul>
                                <li><a href="/AboutPage">About</a></li>
                                <li><a href="/NewsPage">News</a></li>
                                <li><a href="/home">Discover</a></li>
                                <li><a href="/popular">Popular</a></li>
                                <li><a href="/SalesPage">Sales & Special</a></li>
                                <li><a href="/SalesPage">Free Games</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h6 className="copyright-text">
                            &copy; Copyright Gime, 2023 All Rights Reserved
                        </h6>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;