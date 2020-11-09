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
        <Navbar className="navbar p-0 ml-1 mr-1 utility-nav" expand="md">
          <Nav className="ml-auto" navbar>
            <NavItem className="d-flex align-items-center">
              <NavLink className="mr-1" href="https://www.techiediaries.com/react-bootstrap">
              <medium>About the Island</medium> 
              
          </NavLink> |
            </NavItem>
            <NavItem className="d-flex align-items-center">

              <NavLink className="ml-1 mr-1" href="https://www.techiediaries.com/react-bootstrap">
                <medium>Transportation</medium> 
        </NavLink> |
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="ml-1" href="https://www.techiediaries.com/react-bootstrap">
                <medium>FAQ</medium> 
      </NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <Navbar className="navbar navbar-light bg-light main-nav pt-6" color="faded" light expand="md">
          <NavbarBrand >
            <a className="navbar-brand font-weight-bold" href="./" >
              <img width="30" height="30" className="d-inline-block align-top mr-2 ml-2" alt="logo" src={beachIcon} />
              Taniti
          </a>
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
