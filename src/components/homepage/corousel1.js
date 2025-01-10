import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../assets/homepage/7.png'
import Img2 from '../../assets/homepage/8.png'
import Img3 from '../../assets/homepage/13.png'
import 'bootstrap/dist/css/bootstrap.min.css';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Img1}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Img2}/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Img3}/>

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

export default UncontrolledExample;