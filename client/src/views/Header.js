import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import {
    Grid,
    Row,
    Col,
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';

import {
  NavLink,
} from 'reactstrap';

function CustomHeader(props) {

    const navbarInstance = (
        <Navbar inverse collapseOnSelect>

          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Refresh</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

            <Navbar.Toggle>          
            <Nav pullRight>
                <NavItem>
                    <LinkContainer to='/add-item'>
                      <NavLink>Add-Item</NavLink>
                    </LinkContainer>
                </NavItem>

           </Nav>
            </Navbar.Toggle>

      </Navbar>
    );

    return (
        navbarInstance
    );
}


class Header extends Component {

    render() {
      return (
        <div>
            <CustomHeader />
        </div>
      );
    }
}

export default Header;
