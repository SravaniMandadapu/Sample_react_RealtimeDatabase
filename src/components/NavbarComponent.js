import React from 'react'
import {Nav, Navbar, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'



import { Component } from 'react'

 class NavbarComponent extends Component {

  
  
  render() {
    return (

      <Navbar bg="primary" variant="dark" sticky="top">
      <Navbar.Brand href="http://localhost:3000" expand="lg">Sample_App</Navbar.Brand>
      <Nav className="elements">
        
        <Nav.Link href="http://localhost:3000/userdata" ><Button size="lg">Userdata</Button></Nav.Link>

        <Nav.Link href="http://localhost:3000/postdata"><Button size="lg">Post Userdata</Button></Nav.Link>
        <Nav.Link href="http://localhost:3000/update"><Button size="lg">Update Userdata</Button></Nav.Link> 
        <Nav.Link href="http://localhost:3000/delete"><Button size="lg">Delete User using email</Button></Nav.Link> 

        
      
        </Nav>
  
    </Navbar>
    )
  }
}

export default NavbarComponent