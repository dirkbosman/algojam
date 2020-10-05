import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import StateContextProvider from "../components/stateContext";

// const Header = ({ siteTitle }) => (
// const Example = (props) => {
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <StateContextProvider>
        <Navbar fixed="top" light expand="sm">
          <div className="container">
            <NavbarBrand href="/">{props.siteTitle}</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/discover">Discover</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/coders">Coders</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/bookmarks">Bookmarks</NavLink>
                </NavItem>
                <NavItem className="submitBtn">
                  <NavLink href="/submit">Submit</NavLink>
                </NavItem>
                {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem> */}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </StateContextProvider>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
