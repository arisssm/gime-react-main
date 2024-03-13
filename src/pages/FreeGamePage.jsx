import NavbarComp from "../components/NavbarComp";
import {Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FreeGamePage = () => {

    const [datafreeGame, setFreeGame] = useState([]);
    const getFreeGame = async()=>{
        try{
            const response = await axios.get('http://127.0.0.1:3000/api/game');
            setFreeGame(await response.data);
            // console.log(response.data);
        } catch(error){
            console.log(error.message);
        }
    }
    useEffect(() => {
        // localStorage.removeItem('token');
        getFreeGame();
    }, []);
    return (
        <div>
            <NavbarComp/>
            <div id="freegame" className="mt-5">
                <Container >
                    <h5>Free Game</h5>
                    <Row>
                    {
                        datafreeGame.filter(data => data.isFreeGame).map((data, index) => (
                                <Col lg={3} key={index}>
                                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                                        <Card.Img variant="top" src={`http://127.0.0.1:3000/images/${data.cover}`} className='card-image' />
                                        <Card.Body>
                                            <a href={`/detailpage/${data._id}`} className="game-title">
                                                <h5>{data.name}</h5>
                                            </a>
                                            <h4 className="cost">Free</h4>
                                        </Card.Body>
                                    </Card>
                                </Col>
                        ))
                    }
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default FreeGamePage;