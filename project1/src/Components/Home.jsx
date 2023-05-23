import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cor1 from './images/cor1.jpg'
import cor2 from './images/cor2.jpeg'
import cor3 from './images/cor3.jpg'
import office1 from './images/office1.jpg'
import office2 from './images/office2.jpg'
import liv1 from './images/living1.jpg'
import liv2 from './images/living2.jpg'
import toit1 from './images/toilet1.jpg'
import toit2 from './images/toilet2.jpg'
import kit from './images/kitchen.jpg'
import kid from './images/kidsroom.jpg'
import fur from './images/furniture.jpg'
import dine from './images/dining.jpg'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

import './style.css'


function Home() {
  return (
    <>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carohome"
          src={cor1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{color:'blue'}}>CREATIVE INTERIOR DESIGN</h5>
          <h1>Stay At Home In Peace</h1>
          <Button variant="primary">More..</Button>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carohome"
          src={cor2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h5 style={{color:'blue'}}>CREATIVE INTERIOR DESIGN</h5>
          <h1>Make Your Place Better</h1>
          <Button variant="primary">More..</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carohome"
          src={cor3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="primary">More..</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Container>
    <Row className='addres'>
        <Col sm>
          <img src="https://cdn-icons-png.flaticon.com/128/4020/4020599.png" alt="logo" height={"30px"} width={"30px"} />
          <h5 className='headng'>Our Office</h5>
           <p>Address</p>
           <p>Mala-Gov.Hospital road <br />Thrissur <br />Kerala</p>
           </Col>
        <Col sm>
        <img src="https://cdn-icons-png.flaticon.com/128/2165/2165061.png" alt="logo" height={"30px"} width={"30px"} />
          <h5 className='headng'>Email Us</h5>
          <p> <a href='mailto:info@abheesinteriors.com '>info@abheesinteriors.com </a><br /> <a href='mailto:saju@abheesintereriors.com'>saju@abheesintereriors.com</a></p>
          </Col>
        <Col sm>
        <img src="https://cdn-icons-png.flaticon.com/128/9538/9538197.png" alt="logo" height={"30px"} width={"30px"} />
        <h5 className='headng'>Call Us</h5>
          <p>+91 9539336435 <br />+91 9456382987</p>
        </Col>
      </Row>
      <Row className=' corow bg-primary'>
        <Col sm className='m-auto'> 
          <h6 className='text-light text-center m-auto'>OFFICE ROOM</h6>
          <h1 className='text-center m-auto'>Office Room Design</h1>
        </Col>
        <Col sm className='colow'>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={office1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={office2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={office1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={office2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
      </Row>
      <h1 className='text-center'>Living Room</h1>
      <Row className='bg-primary'>
        <Col sm className='m-auto'>
          <h6 className='text-light text-center'>LIVING ROOM</h6>
          <h1 className='text-center'>Living Room Design</h1>
        </Col>
        <Col sm>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={liv1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={liv2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={liv1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={liv2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
      </Row>
      <h1 className='text-center'>Toilet</h1>
      <Row className='bg-primary'>
        <Col sm className='m-auto'>
          <h6 className='text-light text-center'>TOILET</h6>
          <h1 className='text-center'>Toilet Design</h1>
        </Col>
        <Col sm>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={toit1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={toit2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={toit1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={toit2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
      </Row>
      <h1 className='text-center'>WashRoom</h1>
      <Row className='bg-primary'>
        <Col sm className='m-auto'>
          <h6 className='text-light text-center'>WASHROOM</h6>
          <h1 className='text-center'>WashRoom Design</h1>
        </Col>
        <Col sm>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={toit2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={toit1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={toit2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgow"
          src={toit1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
      </Row>
      <h1 className='text-center'>Gallery</h1>
      <div>
        <Row className="mt-4 ms-4 me-4" xs={1} md={2} lg={3}>
          <Col sm className="mb-3">
            <Card className="card-card">
              <Card.Img variant="top" src={kit} />
              <Card.Body>
                <Card.Title className='text-center'>Kitchen</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="primary">More..</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm mt-10 className="mb-4">
            <Card className="card-card">
              <Card.Img variant="top" src={fur} />
              <Card.Body>
                <Card.Title className='text-center'>Furniture</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">More..</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="mb-4">
            <Card className="card-card">
              <Card.Img variant="top" src={kid} />
              <Card.Body>
                <Card.Title className='text-center'>Kids Bed</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">More..</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="mb-4">
            <Card className="card-card">
              <Card.Img variant="top" src={dine} />
              <Card.Body>
                <Card.Title className='text-center'>Dining Table</Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Button variant="primary">More..</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
    
    </>
  )
}

export default Home