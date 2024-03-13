import { Col, Container, Row, Accordion } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import { useEffect, useState } from "react";
import axios from "axios";

const AboutPage = () => {
    const [dataAbout, setDataAbout] = useState([]);
    const [dataFaq, setDataFaq] = useState([]);
    const getAbout = async() => {
        try{
            const response = await axios.get('http://127.0.0.1:3000/api/about');
            setDataAbout( await response.data);
            // console.log(response.data);
        } catch(error){
            console.log(error.message);
        }
    }
    const getFaq = async() => {
        try{
            const response = await axios.get('http://127.0.0.1:3000/api/faq');
            setDataFaq( await response.data);
            // console.log(response.data);
        } catch(error){
            console.log(error.message);
        }
    }
    useEffect(()=> {
        getAbout();
        getFaq();
    }, []);
    return (
        <div>
            <NavbarComp />
            <div id="about">
                <Container className="mt-3">
                    <Row>
                        {dataAbout.map((data, index) => (
                            <Col key={index}>
                                <div className="bio">
                                    <h1><b>about gime</b></h1>
                                    <hr />
                                    <h5><b>Corporate Headquarters</b></h5>
                                    <h6><b>{data.location}</b></h6>
                                    <p>
                                        {data.description}
                                    </p>
                                </div>
                                <div className="contact">
                                    <hr />
                                    <h5><b>Contact</b></h5>
                                    <h6><b>{data.corporateName}</b></h6>
                                    <p>{data.address}<span className="mx-1">{data.phone}</span></p>
                                </div>
                            </Col>
                            ))
                        }
                    </Row>
                    <Row>
                        <div className="faq">
                            <hr />
                            <h5><b>Frequently Ask Question</b></h5>

                            <Accordion defaultActiveKey="0" bg="dark" data-bs-theme="dark" className="mt-3">
                                {
                                    dataFaq.map((data, index)=>
                                    (
                                        <Accordion.Item key={index}>
                                            <Accordion.Header>{data.question}</Accordion.Header>
                                            <Accordion.Body>
                                                {data.answer}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))
                                }
                            </Accordion>
                        </div>
                    </Row>
                </Container>
                <Footer />
            </div>
        </div>
    );
}

export default AboutPage;