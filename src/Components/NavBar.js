import React, {Component} from 'react'
import {Nav, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';

class NavBar extends Component {

  render() {
    return (
      <nav className="bookshelf">
        <Navbar  fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Navbar.Link href="/">My Reading List</Navbar.Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={3} title="Shelf" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href='/currentlyReading'>Currently Reading</MenuItem>
              <MenuItem eventKey={3.2} href='/read'>Read</MenuItem>
              <MenuItem eventKey={3.3} href='/wantToRead'>Want To Read</MenuItem>
            </NavDropdown>
          </Nav>
          <Navbar.Text>
            <Navbar.Link href="/search">Add a Book</Navbar.Link>
          </Navbar.Text>
        </Navbar>
      </nav>
    )
  }
}

export default NavBar
