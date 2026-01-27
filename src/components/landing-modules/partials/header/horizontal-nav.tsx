import React, { Fragment, memo } from 'react'
import Logo from '../../../partials/components/logo'

//React-bootstrap
import { Nav, Navbar,Dropdown, Container, Form, Button,Offcanvas} from 'react-bootstrap'
// //Router
// import { Link,useLocation } from 'react-router-dom'
//Router
import Link  from 'next/link'
import { useRouter } from 'next/router'

const HorizontalNav = memo(() => {
 
    //location
    let location =  useRouter();

  return (
    <Fragment>
        <Navbar expand="xl" id="navbar_main" className="mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav">
<Container fluid className="p-lg-0">
   <Offcanvas.Header className="px-0">
      <Navbar.Brand className="ms-3">
        <Logo color={true}/>
         {/* {{> partials/components/logo color="true"}} */}
         <h5 className="logo-title">Hope Ui</h5>
      </Navbar.Brand>
      <button className="btn-close float-end px-3"></button>
   </Offcanvas.Header>
  <Nav as="ul" className="navbar-nav iq-nav-menu  list-unstyled" id="header-menu">
      <Nav.Item as="li">
          <Link className={`${location.pathname === '/landing-pages' ? 'active' : ''} nav-link `} href="/landing-pages">
                Home
            </Link>
          <Nav as="ul" className="sub-nav collapse  list-unstyled">
              <Nav.Item as="li">
                  <Link className={`${location.pathname === '/landing-pages' ? 'active' : ''} nav-link `} href="/landing-pages">
                    App Landing Page
                  </Link>
              </Nav.Item>
              <Nav.Item as="li">
                  <Link className={`${location.pathname === '/landing-pages/ecommerce-landing-page' ? 'active' : ''} nav-link `} href="/landing-pages/ecommerce-landing-page">
                    Ecommerce Landing Page
                  </Link>
              </Nav.Item>
              <Nav.Item as="li">
                  <Link className={`${location.pathname === '/landing-pages/sass-marketing-landing-page' ? 'active' : ''} nav-link `} href="/landing-pages/sass-marketing-landing-page">
                    Saas Marketing Landing Page
                  </Link>
              </Nav.Item>
              <Nav.Item as="li">
                  <Link className={`${location.pathname === '/landing-pages/software-landing-page' ? 'active' : ''} nav-link `} href="/landing-pages/software-landing-page">
                      Software Landing Page
                  </Link>
              </Nav.Item>
              <Nav.Item as="li">
                  <Link className={`${location.pathname === '/landing-pages/start-up-landing-page' ? 'active' : ''} nav-link `} href="/landing-pages/start-up-landing-page">
                    Startup Landing Page
                  </Link>
              </Nav.Item>
          </Nav>
      </Nav.Item>
      <Nav.Item as="li">
        <Link className={`${location.pathname === '/landing-pages/aboutUs' ? 'active' : ''} nav-link `} href="/landing-pages/aboutUs">About Us </Link>
        </Nav.Item>
      <Nav.Item as="li">
        <Link className={`${location.pathname === '/landing-pages/features' ? 'active' : ''} nav-link `} href="/landing-pages/features"> Features </Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link className={`${location.pathname === '/landing-pages/pricing' ? 'active' : ''} nav-link `} href="/landing-pages/pricing">Pricing</Link>
        </Nav.Item>
      <Nav.Item as="li" className=" d-xl-none">
        <Link className={`${location.pathname === '/landing-pages/blog' ? 'active' : ''} nav-link `} href="/landing-pages/blog">Blog</Link>
        </Nav.Item>
      <Nav.Item as="li" className="d-xl-none">
        <Link className={`${location.pathname === '/landing-pages/shop' ? 'active' : ''} nav-link `} href="/landing-pages/shop"> Shop</Link>
        </Nav.Item>
      <Nav.Item as="li" className="d-xl-none">
        <Link className={`${location.pathname === '/landing-pages/faq' ? 'active' : ''} nav-link `} href="/landing-pages/faq">Faq</Link>
        </Nav.Item>
      <Nav.Item as="li" className="d-xl-none">
        <Link className={`${location.pathname === '/landing-pages/contact-us' ? 'active' : ''} nav-link `} href="/landing-pages/contact-us">Contact Us</Link>
        </Nav.Item>
   </Nav>
</Container> 
{/* <!-- container-fluid.// --> */}
</Navbar>
    </Fragment>
  )
})
HorizontalNav.displayName="HorizontalNav"
export default HorizontalNav