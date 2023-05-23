import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';
import './style.css'
import { Route,Routes,Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Register from './Register';
import Login from './Login';
import AdminLogin from './AdminLogin';
import AdminPage from './AdminPage';
import logo from './images/logo.jpg'

function Navbaar() {
  return (
 <>
 <div className='topbar'>

 </div>
 <div className='topbars'>

 </div>
 <Navbar expand="lg" className="navbars">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img
              alt="logo"
              src={logo}
              width="50"
              height="50"
              
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav >
        <Nav.Item className='navit'>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navit'>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navit'>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navit'>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navit'>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navit'>
          <Nav.Link as={Link} to="/alogin"></Nav.Link>
        </Nav.Item>
      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/alogin" element={<AdminLogin />}/>
      <Route path="/admin" element={< AdminPage />}/>
    </Routes>
  

 </>
  );
}

export default Navbaar;