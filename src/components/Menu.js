import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Badge } from 'reactstrap'
import Octicon, { MarkGithub } from '@githubprimer/octicons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Menu = () => {
  return (
    <div>
      <Navbar
        dark
        style={{ backgroundColor: 'palevioletred' }}
        light
        expand="xs"
        className="fixed-top"
      >
        <NavbarBrand href="/">Home</NavbarBrand>

        <Nav className="m-auto" navbar>
          <NavItem>
            <NavLink href="/skills/">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/project/">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog/">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/zhuoli99">
              <FontAwesomeIcon icon={faLinkedin} size="1.5x" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Menu
