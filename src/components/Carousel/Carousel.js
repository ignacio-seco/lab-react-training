import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function ImageCarousel() {

    let images=[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
      ]
      let [img,setImg]=useState(images)

      let CarouselOfImages = img.map((e,i) => {return <Carousel.Item key={i}>
      <img
        className="d-block w-100"
        src={e}
        alt={i}
        
      />
      <Carousel.Caption>
      </Carousel.Caption>
      </Carousel.Item>})

  return (
    <div className='myCarousel'>
    <Carousel fade>
      {CarouselOfImages}
    </Carousel>
    </div>
  );
}

export default ImageCarousel;