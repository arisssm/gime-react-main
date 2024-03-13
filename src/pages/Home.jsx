import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Nav, Container, Row, Col, Form, Carousel, Image, Card } from 'react-bootstrap';
// import component
import NavbarComp from "../components/NavbarComp";
import Reccommended from '../components/Reccommended';
import Footer from '../components/Footer';
import FreeGame from '../components/FreeGame';
import OnSale from '../components/OnSale';
import { Link } from 'react-router-dom';

const Home = () => {
    const [activeKey, setActiveKey] = useState('discover');
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    };

    const handleCarouselSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [dataFeature, setDataFeature] =  useState([]);
    const [dataCarousel, setDataCarousel] =  useState([]);
    const [dataPopularNews, setPopularNews] =  useState([]);

    const getDataFeature = async() => {
        try{
            const response = await axios.get('http://127.0.0.1:3000/api/feature');
            setDataFeature(await response.data);
            // console.log(response.data);
        } catch(error){
            console.log(error.message);
        }
    }
    const getDataCarousel = async() => {
        try{
            const response = await axios.get('http://127.0.0.1:3000/api/carousel');
            setDataCarousel(await response.data);
            // console.log(response.data);
        } catch(error){
            console.log(error.message);
        }
    }
    const getPopularNews = async() => {
        try{
            const response = await axios.get('http://127.0.0.1:3000/api/news');
            setPopularNews( await response.data.news);
            // console.log(response.data.news);
        } catch(error){
            console.log(error.message);
        }
    }
    useEffect(() => {
        // localStorage.removeItem('token');
        getDataFeature();
        getDataCarousel();
        getPopularNews();
    }, []);
    const renderContent = () => {
        if (activeKey === "discover") {
            return (
                <div id='hero'>
                    <Row>
                    <Carousel className='mt-5' activeIndex={index} onSelect={handleCarouselSelect}>
                        {
                            dataCarousel.map((data, index) => (
                                <Carousel.Item key={index}>
                                    <Image
                                        className="d-block w-100"
                                        src={`http://127.0.0.1:3000/images/${data.image}`}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h5><b>{data.title}</b></h5>
                                        <p>{data.description}</p>
                                        <Link to={`/detailpage/${data._id}`} className="btn btn-outline-light">Buy Now!</Link>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>

                    </Row>
                    <Row className='mt-5'>
                    <h5 className='mb-3'>On Sale</h5>
                        <OnSale/>
                    </Row>
                    <Row>
                        <Reccommended />
                    </Row>
                    <Row className='mt-5'>
                        { 
                            dataFeature.map((data, index) => (
                                <Col lg={4} key={index}>
                                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                                        <Card.Img variant="top" src={`http://127.0.0.1:3000/images/${data.image}`} className='card-image' />
                                        <Card.Body>
                                        {
                                            data.featureName === "Sale & Special" ? (
                                                <Link to="/salespage">
                                                    <h5 className="card-title">{data.featureName}</h5>
                                                </Link>
                                            ) : data.featureName === "Free Games" ? (
                                                <Link to="/freegamepage">
                                                    <h5 className="card-title">{data.featureName}</h5>
                                                </Link>
                                            ) : data.featureName === "Game News" ? (
                                                <Link to="/newspage">
                                                    <h5 className="card-title">{data.featureName}</h5>
                                                </Link>
                                            ) : (
                                                <h5 className="card-title">{data.featureName}</h5>
                                            )
                                        }
                                            <p className="card-text">
                                                {data.description}
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            );
        } else if (activeKey === "popular") {
            return (
                <div id='hero'>
                    <Reccommended />
                    <Row>
                        <Col>
                            <Card className="mt-5 bg-dark" data-bs-theme="dark" style={{width: '100%', borderRadius: '20px'}}>
                                {
                                    dataPopularNews.filter(data=> data.isPopular).map((data, index) => (
                                    <Row key={index}>
                                        <Col md={6}>
                                            <Card.Img variant="top" src={`http://127.0.0.1:3000/images/${data.image}`} className='card-image' />
                                        </Col>
                                        <Col md={6}>
                                            <Card.Body>
                                                <h6 className="subtitle">popular news</h6>
                                                <h3 className="card-title"><b>{data.title}</b></h3>
                                                <p className="card-text">{data.content}</p>
                                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                                <Link to={`/newspage/${data._id}`}>
                                                    <h5>Read More</h5>
                                                </Link>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                    ))
                                }
                            </Card>
                        </Col>
                    </Row>
                    <FreeGame />
                </div>
            );
        }

        // Default content if activeKey doesn't match any condition
        return <div>No content available for this tab.</div>;
    };
    return (
        <div>
            <NavbarComp/>
            <Container className="mt-3">
                <Row>
                    <Col lg={3}>
                        <Form>
                            <Form.Control type="search" className="form-control" placeholder="Search Game" data-bs-theme="dark" />
                        </Form>
                    </Col>
                    <Col lg={9}>
                        <Nav variant="pills" activeKey={activeKey} onSelect={handleSelect}>
                            <Nav.Item>
                                <Nav.Link eventKey="discover">Discover</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="popular">Popular</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {activeKey === "discover" && renderContent()}
                        {activeKey === "popular" && renderContent()}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Home;
