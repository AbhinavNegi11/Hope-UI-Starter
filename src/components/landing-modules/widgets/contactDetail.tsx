import React, { Fragment,memo} from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// Next-Image
import Image from 'next/image'

import bannerContactImg from '../../../../public/landing-modules/images/home-2/banner-contact.webp'


const ContactDetail = memo(() => {
  return (
    <Fragment>
         <Container>
        <Row>
          <Col lg={12}>
            <Image src={bannerContactImg} alt="" className="img-fluid mb-5 pb-3" />
          </Col>
          <Col lg={7} md={12} className="text-lg-start text-center">
            <div className="text-primary text-uppercase sub-title mb-2">contact</div>
            <h2 className="mb-0">
              Let’s Stay <br />
              <span className="text-primary">In Touch</span>
            </h2>
          </Col>
          <Col lg={5} className="contact-detail mt-4 mt-lg-0">
            <h5 className="mb-4">
              Themes, E-commerce website, Dashboard and Apps.
            </h5>
            <h6 className="mb-3">contact@hopeui.com</h6>
            <h6 className="mb-0">(239) 555-0108</h6>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
})
ContactDetail.displayName = "ContactDetail"
export default ContactDetail