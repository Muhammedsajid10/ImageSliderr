import React from 'react';
import { Form } from 'react-bootstrap';

const ImageSliderControls = ({ transspeed, setTransspeed }) => {
    return (
        <div className="w-50 mx-auto mt-3">
            <Form.Group controlId="formRange">
                <Form.Label>Transition Speed:</Form.Label>
                <Form.Range
                    value={transspeed}
                    max={10}
                    onChange={(e) => setTransspeed(parseFloat(e.target.value))}
                />
            </Form.Group>
            <Form.Label>{transspeed.toFixed(1)}s</Form.Label>
        </div>
    );
};

export default ImageSliderControls;
