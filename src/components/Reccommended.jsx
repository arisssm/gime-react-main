import {Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Reccommended = () => {
    const [dataReccommend, setData] =  useState([]);
    useEffect(() => {
        getDataGame();
    }, []);
    const getDataGame = async() => {
        try{
            const response = await axios.get('http://127.0.0.1:3000/api/game');
            setData( await response.data);
            // console.log(response.data);
        } catch(error){
            console.log(error.message);
        }
    }
    return (
        <div className="mt-5">
                <h5 className='mb-3'>Recommended Games</h5>
            <Row>
            {
                dataReccommend.filter(data => data.isRecommendation).map((data, index) => (
                    // data.isRecommendation === true ? (
                        <Col lg={3} key={index}>
                            <Card style={{ width: '100%' }} data-bs-theme="dark">
                                <Card.Img variant="top" src={`http://127.0.0.1:3000/images/${data.cover}`} className='card-image' />
                                <Card.Body>
                                    <a href={`/detailpage/${data._id}`} className="game-title">
                                        <h5>{data.name}</h5>
                                    </a>
                                    <h4 className="cost">IDR {data.price}</h4>
                                </Card.Body>
                            </Card>
                        </Col>
                    // ) : nullw
                ))
            }
            </Row>
        </div>
    );
}

export default Reccommended;