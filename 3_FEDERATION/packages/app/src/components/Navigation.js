import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'reactstrap'

export const Navigation = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contato</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}
