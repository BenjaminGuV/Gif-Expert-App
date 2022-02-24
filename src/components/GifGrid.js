import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from "./GifGridItem";
import { Container, Row, Col } from 'react-bootstrap';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );
    
  return (
    <Container fluid>
        <Row>
            <Col>
                <h3>{category}</h3>
            </Col>
        </Row>

        { loading && 'Cargando.' }

        <Row>
            {
                images.map( (image) => (
                    <GifGridItem 
                        key={ image.id } 
                        {...image} />
                ))
            }

        </Row>
    </Container>
  )
}
