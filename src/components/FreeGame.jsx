import {Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

const FreeGame = () => {
    const [dataFreeGame, setFreeGame] =  useState([]);
    const getFreeGame = async() => {
        try{
            const response = await axios.get('http://127.0.0.1:3000/api/game');
            setFreeGame( await response.data);
            // console.log(response.data);
        } catch(error){
            console.log(error.message);
        }
    }
    useEffect(() => {
        getFreeGame();
    }, []);
    return (
        <div className='mt-5'>
                <h5 className='mb-3'>Top Free Games</h5>
            <Row>
            {
                dataFreeGame.filter(data => data.isFreeGame).map((data, index) => (
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
        </div>
    );
}

export default FreeGame;