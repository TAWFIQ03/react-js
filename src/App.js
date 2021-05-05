import  React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import Home from './navbar/Home'
import './navbar/navbar.css';
import Menu from './navbar/Menu';
import Footer from './navbar/Footer';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Detail from './navbar/Detail';





class  App  extends Component {
 render() {
 
  return (
<Router>
    <div className="App ">
  <div className="nbnavb ">

<Navbar collapseOnSelect expand="lg" bg="#FFF7E5" >
  <Navbar.Brand href="#home" ><img src="./logo.png" alt="" id="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="offset-lg-7" title="Item" >
      <Link className="nav-link hully text-dark offset-4" to="/">HOME</Link>
      <Link className="nav-link hully text-dark offset-4" to="/Menu">MENU</Link>
      <Link className="nav-link hully text-dark offset-4" to="lon2">FAVORITE</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


       <Route path="/" exact component={Home} />
</div>

       <Route path="/Menu"exact component={Menu} />
       <Route path="/Detail/:login"exact component={Detail} />
       
</div>
 
<Footer/>

</Router> 
);
 }
}

export default App;