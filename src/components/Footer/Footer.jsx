import React from 'react';
import { Container,Row,Col,ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
          <div className="logo footer__logo text-start">
                        <img src={logo} alt="logo" />
                        <h5>Greek</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Eos, aliquid.
                            Nostrum eum maxime quos veritatis unde incidunt exercitationem nulla nemo impedit.
                        </p>
                    </div>

          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>
              Delivery Time
            </h5>

            <ListGroup className='deliver__time-list'>
              <ListGroupItem  className='delivery__time-item border-0 ps-0'>
                <span>
                Sunday - Thursday
                </span>
                <p>
                  10.00am - 11:00pm
                </p>
              </ListGroupItem>

              <ListGroupItem  className='delivery__time-item border-0 ps-0'>
                <span>
                Friday - Saturday
                </span>
                <p>
                  Off day
                </p>
              </ListGroupItem>

            </ListGroup>
          </Col>


          <Col lg='3' md='4' sm='6'>

          <h5 className='footer__title'>
              Contact
            </h5>

            <ListGroup className='deliver__time-list'>

            <ListGroupItem  className='delivery__time-item border-0 ps-0'>
                <span>
                  Location: Tagmo3, Egypt
                </span>
              </ListGroupItem>

              <ListGroupItem  className='delivery__time-item border-0 ps-0'>
                <span>
                Phone: 012354847651
                </span>
              </ListGroupItem>

              <ListGroupItem  className='delivery__time-item border-0 ps-0'>
                <span>
                  Email: example@gmail.com
                </span>
              
              </ListGroupItem>

            </ListGroup>

          </Col>


          <Col lg='3' md='4' sm='6'>
          <h5 className='footer__title'>
              NewsLetter
            </h5>
            <p>
              Subscribe our newsLetter
            </p>
            <div className="newsletter">
              <input type="email" placeholder='Enter Your email'/>
              <span>
                <i className='ri-send-plane-line'></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6' className=''>
            <p className='copyright__text'>
              Copyright - 2022, website made by companyName. All Rights Reserved.
            </p>
          </Col>
          <Col lg='6' md='6'>
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className='m-0'>
                Follow:
              </p>
              <span>
                {" "}
                <Link to=''>
                  <i className='ri-facebook-line'></i>
                </Link>{" "}
              </span>

              <span>
                <Link to=''>
                  <i className='ri-github-line'></i>
                </Link>
              </span>

              <span>
                <Link to=''>
                  <i className='ri-youtube-line'></i>
                </Link>
              </span>

              <span>
                <Link to=''>
                  <i className='ri-linkedin-line'></i>
                </Link>
              </span>

            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer