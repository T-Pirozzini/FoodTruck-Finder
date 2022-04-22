import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://food.fnr.sndimg.com/content/dam/images/food/products/2022/3/11/rx_goldbelly-clinton-street-diner-zeus-burger.jpg.rend.hgtvcom.406.305.suffix/1647019464547.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.vox-cdn.com/thumbor/K-uT_aKizX7o9ejDbgeTGhwsqXY=/0x0:1638x2048/1200x800/filters:focal(681x606:943x868)/cdn.vox-cdn.com/uploads/chorus_image/image/70775626/274631072_10159235198644094_8293783282457429408_n.0.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.vox-cdn.com/thumbor/FtykbMy9mPZuBkf1bnA-KY57N2o=/0x0:1086x724/1200x900/filters:focal(457x276:629x448)/cdn.vox-cdn.com/uploads/chorus_image/image/70659154/DE999754_BBDC_4785_801B_FBB68346CA32_1_105_c.0.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// render(<Carousel />);