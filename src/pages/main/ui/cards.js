import React from 'react';
import DefaultImage from '../../../assets/images/imgs/avatar.jpg'

export const Card = (props) => {
  const { image, name, occupation } = props;

  return (
    <div className="w-[300px] rounded overflow-hidden shadow-lg img-wrapper">
      <div className=''>
        <img className="w-full" src={image} alt="profile" style={{objectFit: "cover", width: "300px",height:"300px"}}/>
        <div className="!px-6 !py-4">
          <div className="font-bold text-xl mb-2" >{name}</div>
        </div>
      </div>
      <div className="overlay">
        <div className="overlay-infos">
          <h3>{occupation}</h3>
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  image: DefaultImage,
  name: "John Doe",
  occupation: "Président",
}