import { Carousel, Image } from 'react-bootstrap';


const images = [
    "https://images.pexels.com/photos/209679/pexels-photo-209679.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=500&amp;w=500",
    "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
    "https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
];

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

