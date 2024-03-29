import { Container, Row, Col } from 'react-bootstrap';

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/*  <MailchimpForm /> */}
          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/bariskarabela"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/bariskrbl"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/bariskrbl"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
