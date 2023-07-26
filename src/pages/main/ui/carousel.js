import DefaultImage from '../../../assets/images/vadil.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselUI() {
  return (
    <div>
      <Carousel autoPlay={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
        <div>
          <img src={DefaultImage} />
        </div>
        <div>
          <img src={DefaultImage} />
        </div>
        <div>
          <img src={DefaultImage} />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselUI;