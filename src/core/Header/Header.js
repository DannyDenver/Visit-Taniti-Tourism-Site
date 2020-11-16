import { Fragment } from 'react';

import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import beachIcon from '../../assets/beach.svg'
import './Header.css'

class Header extends Component {
  
  isSelected(title) {
    if(window.location.href.indexOf(title) > -1) {
      return 'underlined'
    }
  }


  render() {
    return (
      <Fragment>
        <div className="d-flex flex-row justify-content-center utility-bar">
          <a className="d-flex">Speak with a Booking Agent Today! </a>
          <div className="d-flex ml-3">84° ☀️</div>

        </div>
        <nav className="navbar sticky-top navbar-expand-xl  navbar-light bg-light main-nav align-items-center">
          <a className="navbar-brand font-weight-bold" href="./">
            <img width="34" height="34" className="d-inline-block mr-2 ml-2" alt="logo" src={beachIcon} />
            Taniti
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a className={"nav-link " + this.isSelected('culture') } href="/culture">Culture</a>
              </li>
              <li class="nav-item">
                <a className={"nav-link " + this.isSelected('adventure') } href="/adventure">Adventure</a>
              </li>
              <li class="nav-item">
                <a className={"nav-link " + this.isSelected('cuisine') } href="/cuisine">Cuisine</a>
              </li>
              <li class="nav-item">
                <a className={"nav-link " + this.isSelected('lodging') } href="/lodging">Lodging</a>
              </li>
              <li class="nav-item">
                <a className={"nav-link " + this.isSelected('transportation') } href="/transportation">Transportation</a>
              </li>
              <li class="nav-item">
                <a className={"nav-link " + this.isSelected('faq') } href="/faq">FAQ</a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    )
  }
}

export default Header;

