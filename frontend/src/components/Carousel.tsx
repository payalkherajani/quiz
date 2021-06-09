import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import question from '../assets/question.jpg';

const images = [c1, c2, question];

const CarouselComponent = () => {
    return (
        <Carousel>
            {
                images.map((item) => {
                    return <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={item}
                            alt="slide"
                        />
                        <Carousel.Caption>
                            <h1 className="text-primary">PAHELI</h1>
                            <h5 className="text-info">#BujhoToJane</h5>
                        </Carousel.Caption>
                    </Carousel.Item>;
                })
            }
        </Carousel>
    );
};

export default CarouselComponent;

