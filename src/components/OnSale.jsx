import { useEffect, useState } from "react";
import {Row, Col, Card} from "react-bootstrap";
import axios from "axios";
const OnSale = () => {
    const [dataSale, setDataSale] =  useState([]);

    // object = 1. array 2. json

    useEffect(() => {
        getDataGame();
    }, []);
    const getDataGame = async() => {
        try{
            const response = await axios.get('http://127.0.0.1:3000/api/game');
            setDataSale( await response.data);
            // console.log(response.data);
        } catch(error){
            console.log(error.message);
        }
    }

    return (
        <div>
            <Row>
                {
                    dataSale.filter(data => data.isOnSale).map((data, index) => (
                            <Col lg={4} key={index}>
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
                    ))
                }
            </Row>
        </div>
    );
}

export default OnSale;