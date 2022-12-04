import React from "react";
import { Card, Button} from "react-bootstrap";


const CardDestination = (props)=>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body className="row justify-content-center">
                <Card.Title>{props.wisata}</Card.Title>
                <Button variant="primary">{props.button}</Button>
            </Card.Body>
        </Card>
  );
}

export default CardDestination;
