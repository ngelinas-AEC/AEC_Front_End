// <!-- Footer.js -->
// <!-- Programmation Web 2 & Interfaces Web 2 -->
// <!-- Projet Final par Nico Gelinas -->

import React from 'react';
import '../styles/footer.sass';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export  function Footer() {
 
  return (
    <footer>
    <Container fluid className='footer' >
        <Row >
          <Col  xl="12" lg="12" md="12" sm="12">
          <p className="m-0 text-center text-white">Copyright &copy; Nico Gelinas {new Date().getFullYear()}</p>
          </Col>
        </Row>
    </Container>
    </footer>
  );
}


