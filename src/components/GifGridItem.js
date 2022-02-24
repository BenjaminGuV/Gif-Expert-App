import React from 'react';
import { Col, Card } from 'react-bootstrap';

export const GifGridItem = ( { id, title, url } ) => {



  return (
    <Col sm={4}>
        <Card>
            <Card.Img variant="top" src={url} alt="img" />
            <Card.Body>
                <Card.Text>
                    {title}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
  )
}
