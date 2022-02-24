import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { Container, Row, Col } from 'react-bootstrap';


export const GiftExpertApp = () => {

    //const categories = ['One punch', 'Samuria X', 'Dragon Ball'];
    const [categories, setCategories] = useState([]);

    return (
        <Container fluid>

            <Row>
                <Col>
                    <h2>Gif Expert App</h2>
                    <hr />

                    <AddCategory setCategories={ setCategories }/>
                </Col>
            </Row>

            <Row>
                {
                    categories.map( (category) => (
                        <GifGrid 
                            key={ category }
                            category={category} 
                        />
                    ))
                }
            </Row>

        </Container>
    )
}
