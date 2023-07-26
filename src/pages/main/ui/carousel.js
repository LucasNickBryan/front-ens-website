import DefaultImage from '../../../assets/images/vadil.jpg'
import DefaultImage2 from '../../../assets/images/imgs/logo.PNG'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselUI() {
  const handleChange = (selectedIndex) => {
    // Faites quelque chose avec l'image actuelle
    console.log('Image actuelle :', selectedIndex);
  };

  return (
    <div className='shadow z-10'>
      <Carousel onChange={handleChange} autoPlay={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
        <div>
          <img className='max-h-[500px] w-full object-cover' src={DefaultImage} />
        </div>
        <div>
          <img className='max-h-[500px] w-full object-cover' src={DefaultImage2} />
        </div>
        <div>
          <img className='max-h-[500px] w-full object-cover' src={DefaultImage} />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselUI;