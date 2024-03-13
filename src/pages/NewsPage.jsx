import { Col, Container, Form, Card, Row, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import axios from "axios";
import { useEffect, useState } from "react";

const NewsPage = () => {
    const [dataNews, setDataNews] = useState([]);
    const getNews = async() => {
        try{
            const response = await axios.get('http://127.0.0.1:3000/api/news');
            setDataNews( await response.data.news);
            // console.log(response.data.news);
        } catch(error){
            console.log(error.message);
        }
    }
    useEffect(() => {
        getNews();
    }, []);
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
                        {
                            dataNews.map((data, index)=>(
                                <Col lg={6} key={index}>
                                    <Card className="mt-3" style={{ width: '100%', background: 'none', color: 'white' }}>
                                        <Card.Img src={`http://127.0.0.1:3000/images/${data.image}`} variant="top" alt="..." />
                                        <Card.Body>
                                            <h6><small>{data.publishDate}</small></h6>
                                            <a href={`/newspage/${data._id}`} className="card-title">
                                                <h5>{data.title}</h5>
                                            </a>
                                            <p>{data.content}</p>
                                        </Card.Body>
                                    </Card>
                                </Col>  
                            ))
                        }
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default NewsPage;