import React from "react";
import Head from "next/head";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const categories = [
  {
    href: "/categories/upgrades",
    text: "Upgrades",
  },
  {
    href: "/categories/toys",
    text: "Toys",
  },
  {
    href: "/categories/miniatures",
    text: "Miniatures",
  },
  {
    href: "/categories/tools",
    text: "Tools",
  },
];

const Header = () => {
  return (
    <>
      <Head>
        <title>OpenThingi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid="md">
          <Navbar.Brand href="/">OpenThingi</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-nav-nav">
            <Nav>
              <NavDropdown title="Explore" id="cllapsible-nav-dropdown">
                {categories.map((category) => (
                  <NavDropdown.Item key={category.text} href={category.href}>
                    {category.text}
                  </NavDropdown.Item>
                ))}

                <NavDropdown.Divider />

                <NavDropdown.Item href="/categories">
                  All Categories
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
