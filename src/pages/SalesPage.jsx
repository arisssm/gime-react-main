import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import OnSale from "../components/OnSale";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

const SalesPage = () => {
    const [specialGame, setSpecialGame] = useState([]);
    const getGame = async() => {
        try{
            const response = await axios.get('http://127.0.0.1:3000/api/game');
            setSpecialGame( await response.data);
            // console.log(response.data);
        } catch(error){ 
            console.log(error.message);
        }
    }
    useEffect(() => {
        getGame();
    }, []);
    return (
        <div>
            <NavbarComp />
            <div id="sales">
                <Container>
                    <h5 className='mt-3'>Now On Sale</h5>
                    <OnSale />
                    <div className='special'>
                    <h5 className='mt-3'>Special Game</h5>
                        <Row>
                        {
                            specialGame.filter(data => data.isSpecialOffer).map((data, index)=>(
                            <Col lg={6} key={index}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src={`http://127.0.0.1:3000/images/${data.cover}`} alt="Card image" />
                                    <Card.ImgOverlay>
                                        <div className='deskripsi'>
                                            <Card.Title>{data.name}</Card.Title>
                                            <Card.Text>
                                                {data.description}
                                            </Card.Text>
                                            <h4 className="cost">IDR {data.price}</h4>
                                            <a href={`/detailpage/${data._id}`} className="btn btn-outline-light mt-3">Buy Now</a>
                                        </div>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            ))
                        }
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default SalesPage;