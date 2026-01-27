import React, { Fragment, memo, useState } from "react";
import { Button, Container, Dropdown, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Link from 'next/link'
import { useRouter } from "next/router";
import MobileOffcanvas from "../../widgets/mobile-offcanvas";

interface Props{
  appName:any;
}

const Header2 = memo((props: Props) => {
  let location = useRouter();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <Fragment>
      <Navbar
        expand="xl"
        className="nav navbar navbar-expand-xl navbar-light iq-navbar header-hover-menu"
      >
        <Container fluid className="navbar-inner">
          <div className="d-flex align-items-center justify-content-between w-100 landing-header">
            <Link
              href="/landing-pages/home"
              className="navbar-brand m-0 d-xl-flex d-none"
            >
              {/* <Link href="{{path}}dashboard/index.html" className="navbar-brand m-0"> */}
              {/* <!--Logo start--> */}
              <svg
                className="icon-30 text-primary"
                width="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-0.757324"
                  y="19.2427"
                  width="28"
                  height="4"
                  rx="2"
                  transform="rotate(-45 -0.757324 19.2427)"
                  fill="currentColor"
                ></rect>
                <rect
                  x="7.72803"
                  y="27.728"
                  width="28"
                  height="4"
                  rx="2"
                  transform="rotate(-45 7.72803 27.728)"
                  fill="currentColor"
                ></rect>
                <rect
                  x="10.5366"
                  y="16.3945"
                  width="16"
                  height="4"
                  rx="2"
                  transform="rotate(45 10.5366 16.3945)"
                  fill="currentColor"
                ></rect>
                <rect
                  x="10.5562"
                  y="-0.556152"
                  width="28"
                  height="4"
                  rx="2"
                  transform="rotate(45 10.5562 -0.556152)"
                  fill="currentColor"
                ></rect>
              </svg>
              {/* <!--logo End--> */}
              <h5 className="logo-title">Hope UI</h5>
            </Link>

            {/* mobile menu start */}
            <div className="d-flex align-items-center d-xl-none">
              <Button
                data-trigger="navbar_main"
                className="d-xl-none rounded-pill p-1 pt-0"
                type="button"
                onClick={handleShow}
              >
                <svg width="20px" height="20px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                  ></path>
                </svg>
              </Button>

              <Link
                href="/landing-pages/home"
                className="navbar-brand ms-3  d-xl-none"
              >
                <svg
                  className="icon-30 text-primary"
                  width="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="-0.757324"
                    y="19.2427"
                    width="28"
                    height="4"
                    rx="2"
                    transform="rotate(-45 -0.757324 19.2427)"
                    fill="currentColor"
                  ></rect>
                  <rect
                    x="7.72803"
                    y="27.728"
                    width="28"
                    height="4"
                    rx="2"
                    transform="rotate(-45 7.72803 27.728)"
                    fill="currentColor"
                  ></rect>
                  <rect
                    x="10.5366"
                    y="16.3945"
                    width="16"
                    height="4"
                    rx="2"
                    transform="rotate(45 10.5366 16.3945)"
                    fill="currentColor"
                  ></rect>
                  <rect
                    x="10.5562"
                    y="-0.556152"
                    width="28"
                    height="4"
                    rx="2"
                    transform="rotate(45 10.5562 -0.556152)"
                    fill="currentColor"
                  ></rect>
                </svg>
                <h5 className="logo-title">Hope UI</h5>
              </Link>
            </div>
            <ul className="d-block d-xl-none list-unstyled m-0">
          <Dropdown className="nav-item dropdown iq-responsive-menu ">
        <div className="btn btn-sm bg-body border-0" id="navbarDropdown-search-11" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </div>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown-search-11" style={{width: "18rem"}}>
            <li className="px-3 py-0">
                <Form.Group className="form-group input-group mb-0">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-text">
                    <svg className="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                        <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </span>
                </Form.Group>
            </li>
        </ul>
          </Dropdown>
        </ul>
            {/* mobile menu end */}

            {/* <!-- Horizontal Menu Start --> */}
            <Navbar
              expand="xl"
              id="navbar_main"
              className="mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav"
            >
              <Container fluid className="p-lg-0">
                <Offcanvas.Header className="px-0">
                  <Navbar.Brand className="ms-3">
                    <h5 className="logo-title">{props.appName}</h5>
                  </Navbar.Brand>
                  <button className="btn-close float-end px-3"></button>
                </Offcanvas.Header>
                <Nav
                  as="ul"
                  className="navbar-nav iq-nav-menu  list-unstyled"
                  id="header-menu"
                >
                  <Nav.Item as="li">
                    <Link
                      className={`${
                        location.pathname === "/landing-pages/home"
                          ? "active"
                          : ""
                      } nav-link `}
                      href="#"
                    >
                      <span className="item-name">Home</span>
                    </Link>
                    <Nav
                      as="ul"
                      className="iq-header-sub-menu list-unstyled collapse"
                      id="homeData"
                    >
                      <Nav.Item as="li">
                        <Link
                          className={`${
                            location.pathname === "/landing-pages"
                              ? "active"
                              : ""
                          } nav-link `}
                          href="/landing-pages"
                        >
                          App Landing Page
                        </Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Link
                          className={`${
                            location.pathname ===
                            "/landing-pages/ecommerce-landing-page"
                              ? "active"
                              : ""
                          } nav-link `}
                          href="/landing-pages/ecommerce-landing-page"
                        >
                          Ecommerce Landing Page
                        </Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Link
                          className={`${
                            location.pathname ===
                            "/landing-pages/sassmarketing-landing-page"
                              ? "active"
                              : ""
                          } nav-link `}
                          href="/landing-pages/sass-marketing-landing-page"
                        >
                          Sass Landing page
                        </Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Link
                          className={`${
                            location.pathname ===
                            "/landing-pages/software-landing-page"
                              ? "active"
                              : ""
                          } nav-link `}
                          href="/landing-pages/software/landing-page"
                        >
                          Software Landing Page
                        </Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Link
                          className={`${
                            location.pathname ===
                            "/landing-pages/start-up-landing-page"
                              ? "active"
                              : ""
                          } nav-link `}
                          href="/landing-pages/start-up-landing-page"
                        >
                          Startup Landing Page
                        </Link>
                      </Nav.Item>
                    </Nav>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link
                      className={`${
                        location.pathname === "/landing-pages/aboutUs"
                          ? "active"
                          : ""
                      } nav-link `}
                      href="/landing-pages/aboutUs"
                    >
                      About Us{" "}
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link
                      className={`${
                        location.pathname === "/landing-pages/features"
                          ? "active"
                          : ""
                      } nav-link `}
                      href="/landing-pages/features"
                    >
                      {" "}
                      Features{" "}
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link
                      className={`${
                        location.pathname === "/landing-pages/pricing"
                          ? "active"
                          : ""
                      } nav-link `}
                      href="/landing-pages/pricing"
                    >
                      Pricing
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link
                      className={`${
                        location.pathname === "/landing-pages/blog"
                          ? "active"
                          : ""
                      } nav-link `}
                      href="/landing-pages/blog"
                    >
                      Blog
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link
                      className={`${
                        location.pathname === "/landing-pages/shop"
                          ? "active"
                          : ""
                      } nav-link `}
                      href="/landing-pages/shop"
                    >
                      {" "}
                      Shop
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link
                      className={`${
                        location.pathname === "/landing-pages/faq"
                          ? "active"
                          : ""
                      } nav-link `}
                      href="/landing-pages/faq"
                    >
                      Faq
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link
                      className={`${
                        location.pathname === "/landing-pages/contact-us"
                          ? "active"
                          : ""
                      } nav-link `}
                      href="/landing-pages/contact-us"
                    >
                      Contact Us
                    </Link>
                  </Nav.Item>
                </Nav>
              </Container>
            </Navbar>
            {/* <!-- Sidebar Menu End --> */}
            {/* Mobile off-canvas */}
            <MobileOffcanvas show={show} handleClose={handleClose}/>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
});
Header2.displayName='Header2'
export default Header2;
