import DefaultImage from '../../../assets/images/vadil.jpg'
import DefaultImage2 from '../../../assets/images/vasily.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';

const IMAGES = [
  {
    image: DefaultImage,
  },
  {
    image: DefaultImage2,
  },
  {
    image: DefaultImage,
  },
];
function CarouselUI(props) {
  const { images, useBackground, path } = props;
  const [currentImage, setCurrentImage] = useState(images[0] ?? IMAGES[0])

  const handleChange = (selectedIndex) => {
    setCurrentImage(images[selectedIndex]);
  };

  return (
    <div className='relative'>
      <div className='shadow !z-50 max-w-4xl mx-auto '>
        <Carousel onChange={handleChange} autoPlay={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
          {
            images.length > 0 && images.map((img, index) => (
              <div key={index} className='max-h-[500px] relative'>
                <img className=' w-full h-full object-cover object-center' src={path + img.image} />
                {/* <span className="legend shadow !w-32 font-bold cursor-pointer">voir la galerie</span> */}
              </div>
            ))
          }
        </Carousel>
      </div>
      {
        useBackground &&
        <div className="h-2/3 w-3/5 md:w-2/3 left-[20%] absolute top-[17%] sm:!hidden z-[-1]">
          <img src={path + currentImage.image} className='h-full w-full object-cover blur-[3px] rounded-xl' />
        </div>
      }
    </div>
  );
}

export default CarouselUI;

CarouselUI.defaultProps = {
  images: IMAGES,
  useBackground: true
}