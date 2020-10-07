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
import IconImage from "../images/icon.png";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <StateContextProvider>
        <Navbar fixed="top" light expand="sm">
          <div className="container">
            <NavbarBrand href="/" className="algoJamBrand">
              <img
                className="iconImage"
                src={IconImage}
                style={{}}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
                alt="Icon Image"
              />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/tags">Tags</NavLink>
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
                <NavItem>
                  <NavLink href="/submit">Submit</NavLink>
                </NavItem>
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
