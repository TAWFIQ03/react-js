import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import './navbar.css';


class Footer extends Component {

  render() {
    return (
      // home
      <div className="all">
      
         

           {/* footer */}

        <div className="footer">
          <div className="foote">
            
              

<div className="row bg" >
<div className="col-lg-4 hl text-center">
 
 <Navbar.Brand> <img src="./logo.png" alt="" id="logo" /></Navbar.Brand>

 
   <Nav.Link className="text-dark text-center" href="#deets">20 Theodore Conrad Dr, Jersey City,NJ 07305, United States</Nav.Link>
   <div className="look">
         <a href="www.facebook.com"><i className="fab fa-facebook-f text-dark  mr-4"></i></a>
         <a><i className="fab fa-instagram text-dark  mr-4"></i></a>
         <a><i className="fab fa-twitter text-dark  mr-4"></i></a>
         <a><i className="fab fa-whatsapp text-dark   mr-4"></i></a>
   </div>
</div>
  <div className="col-lg-4 hl text-center">
  <h5 >MENU</h5>
  
                <Nav.Link className="text-dark" href={'/Detail/52978'}>Kumpir</Nav.Link>
                <Nav.Link className="text-dark" href={'/Detail/53014'}>pizza</Nav.Link>
                <Nav.Link className="text-dark" href={'/Detail/53026'}>Tamiya</Nav.Link>
                <Nav.Link className="text-dark" href={'/Detail/52785'}>Dal fry</Nav.Link>
                <Nav.Link className="text-dark" href={'/Detail/52804'}>Poutine</Nav.Link>
                <Nav.Link className="text-dark" href={'/Detail/52948'}>Wontons</Nav.Link>
  </div>
  
<div className="col-lg-4  hl text-center">
  <h5 >STAY CONTACT</h5>

  <Nav.Link className="text-dark" href="#deets">+212770008800</Nav.Link>
  <Nav.Link className="text-dark" href="#deets">Fast.food@help.com</Nav.Link>

  <Navbar.Brand> <a><i class="fad fa-angle-double-up" aria-hidden="true"></i></a> </Navbar.Brand>
</div>

</div>


            
{/* copyright */}


          </div>
          <div className="copyr">
            <p>
              COPYRIGHT © ALL RIGHT RESERVED
            </p>

          </div>



        </div>
      </div>
    );

  };

}

export default Footer;







