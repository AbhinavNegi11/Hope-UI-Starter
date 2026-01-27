import { useRouter } from 'next/router';
import React,{Fragment} from 'react'
import { Nav, Offcanvas } from 'react-bootstrap'
import Link from 'next/link';

const MobileOffcanvas = (props: any) => {

    let location = useRouter();

  return (
    <Fragment>
        <Offcanvas
              show={props.show}
              onHide={props.handleClose}
              className=" mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav mx-md-auto"
            >
              <Offcanvas.Header closeButton>
                <div className="navbar-brand">
                  <svg
                    width="30"
                    className="text-primary"
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
                    />
                    <rect
                      x="7.72803"
                      y="27.728"
                      width="28"
                      height="4"
                      rx="2"
                      transform="rotate(-45 7.72803 27.728)"
                      fill="currentColor"
                    />
                    <rect
                      x="10.5366"
                      y="16.3945"
                      width="16"
                      height="4"
                      rx="2"
                      transform="rotate(45 10.5366 16.3945)"
                      fill="currentColor"
                    />
                    <rect
                      x="10.5562"
                      y="-0.556152"
                      width="28"
                      height="4"
                      rx="2"
                      transform="rotate(45 10.5562 -0.556152)"
                      fill="currentColor"
                    />
                  </svg>
                  <h4 className="logo-title">Hope UI</h4>
                </div>
              </Offcanvas.Header>
              <Offcanvas.Body>
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
              </Offcanvas.Body>
            </Offcanvas>
    </Fragment>
  )
}

export default MobileOffcanvas
