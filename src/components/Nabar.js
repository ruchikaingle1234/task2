import Buttons2 from "./Buttons2";
import "./Nabar.css";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nabar = () => {
  return (
    <div className="stack17">
     
       <Navbar collapseOnSelect expand="lg">
          
          
          <Navbar.Toggle className="bg-light" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto text-light">
              <Nav.Link href="#product"><p className="n"> About</p></Nav.Link>
              <Nav.Link href="#features"><p className="n">Features</p></Nav.Link>
              <Nav.Link href="#pricing"><p className="n">Customers</p></Nav.Link>
              <Nav.Link href="#about"><p className="n">Updates</p></Nav.Link>
              <Nav.Link href="#company"><p className="n">Help</p></Nav.Link>
              
              </Nav>
              
          </Navbar.Collapse>
          <Buttons2 />
        </Navbar>


     
    </div>
  );
};

export default Nabar;
