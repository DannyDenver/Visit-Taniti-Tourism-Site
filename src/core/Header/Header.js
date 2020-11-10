import { Fragment } from 'react';

import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import beachIcon from '../../assets/beach.svg'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <Fragment>
      <div className="d-flex flex-row justify-content-center utility-bar">
      <a className="d-flex">Speak with a Booking Agent Today! </a>
      <div className="d-flex ml-3">84° ☀️</div>

    </div>

        <Navbar className="navbar navbar-light bg-light main-nav pt-6 align-items-center" color="faded" light expand="md">
          <NavbarBrand className="navbar-brand font-weight-bold" href="./">
              <img width="34" height="34" className="d-inline-block mr-2 ml-2" alt="logo" src={beachIcon} />
              Taniti
          </NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                Culture
              </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                Adventures
            </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                Cuisine
          </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                Lodging
        </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                Transportation
            </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                FAQ
          </NavLink>
            </NavItem>


          </Nav>
        </Navbar>
      </Fragment>
    )
  }
}

export default Header;



// <Navbar className="navbar p-0 ml-1 mr-1 utility-nav" expand="md">
// <Nav className="justify-center" navbar>
// <NavItem className="d-flex align-items-center">
// <NavLink className="mr-1" href="https://www.techiediaries.com/react-bootstrap">
// Speak with a Booking Agent Today!
// </NavLink>
// </NavItem>
//   <NavItem className="d-flex align-items-center">
//     <NavLink className="mr-1" href="https://www.techiediaries.com/react-bootstrap">
//     
// </NavLink>
//   </NavItem>
// </Nav>
// </Navbar>

// <NavItem className="d-flex align-items-center">
// <NavLink className="ml-1 mr-1" href="https://www.techiediaries.com/react-bootstrap">
//   Transportation
// </NavLink> |
// </NavItem>
// <NavItem className="d-flex align-items-center">
// <NavLink className="ml-1" href="https://www.techiediaries.com/react-bootstrap">
//   FAQ
// </NavLink>
// </NavItem>
