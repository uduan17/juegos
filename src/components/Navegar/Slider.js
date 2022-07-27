import Carousel from 'react-bootstrap/Carousel';
import apex from '../Img/apex.jpg';
import Imagen2 from '../Img/Imagen2.jpg';
import Imagen3 from '../Img/Imagen3.jpg';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" src={apex} alt="First slide"/>
        <Carousel.Caption>
          <h3>Ultimate Ninja Impact</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" src={Imagen2} alt="Second slide"/>
        <Carousel.Caption>
          <h3>Minecraft</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" src={Imagen3} alt="Third slide"/>

        <Carousel.Caption>
          <h3>Fornite</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;