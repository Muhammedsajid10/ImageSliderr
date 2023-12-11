import React, { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import SimpleImageSlider from 'react-simple-image-slider';
import ImageSliderControls from './ImageSliderControls';
import './ImageSlider.css';

const img = [
    { url: 'https://source.unsplash.com/1600x900/?nature' },
    { url: 'https://source.unsplash.com/1600x900/?landscape' },
    { url: 'https://source.unsplash.com/1600x900/?mountains' },
    { url: 'https://source.unsplash.com/1600x900/?water' },
    { url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { url: 'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
];

const ImageSlider = () => {
    const [transspeed, setTransspeed] = useState(0.5);

    return (
        <Container fluid className="parallax-container">
            <Col className="parallax-content">
                <SimpleImageSlider
                    width={'100%'}
                    height={'100vh'}
                    images={img}
                    showBullets={true}
                    showNavs={true}
                    slideDuration={transspeed}
                />
                <ImageSliderControls transspeed={transspeed} setTransspeed={setTransspeed} />
            </Col>
        </Container>
    );
};

export default ImageSlider;