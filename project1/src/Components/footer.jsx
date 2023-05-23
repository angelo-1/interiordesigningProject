import React from 'react'
import { Col, Row } from 'react-bootstrap'

function footer() {
  return (
    <>
    <div className='footers'>
      <Row className='w-100'>
      <Col sm>
      <h4 className='text-primary headngs'>Get In Touch</h4>
      <p className='text-start parg'>📍Thrissur,Mala-Gov.Hospital road,kerala,India <br />📞 +91 9544595880,7907534215 <br />📧info@abheesinteriors.com</p>
      </Col>
      <Col sm>
        <h4 className='text-primary headngs'>Quick Links</h4>
        <ul className='list-unstyled text-muted parg'>
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </Col>
      <Col sm><h4 className='text-primary headngs'>Popular Links</h4></Col>
      </Row>
    </div>
    </>
  )
}

export default footer