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
        <Navbar className="navbar sticky-top navbar-light bg-light main-nav align-items-center" color="faded" light expand="md">
          <NavbarBrand className="navbar-brand font-weight-bold" href="./">
              <img width="34" height="34" className="d-inline-block mr-2 ml-2" alt="logo" src={beachIcon} />
              Taniti
          </NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/culture">
                Culture
              </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/adventure">
                Adventure
            </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/cuisine">
                Cuisine
          </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/lodging">
                Lodging
        </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/transportation">
                Transportation
            </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/faq">
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

