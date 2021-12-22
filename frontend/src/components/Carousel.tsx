import { Carousel, Image } from 'react-bootstrap';
import cc1 from '../assets/cc1.svg';
import cc2 from '../assets/cc2.svg';

const images = [cc1, cc2];

const CarouselComponent = () => {
    return (
        <Carousel>
            {
                images.map((item) => {
                    return <Carousel.Item key={item}>
                        <Image
                            className="d-block w-100 h-90"
                            src={item}
                            alt="slide"
                            style={{ height: '500px' }}
                        />
                        <Carousel.Caption>
                            <h1 className="text-primary text-right">PAHELI</h1>
                            <h5 className="text-info text-right">#BujhoToJane</h5>
                        </Carousel.Caption>
                    </Carousel.Item>;
                })
            }
        </Carousel>
    );
};

export default CarouselComponent;

