import React, { Fragment, memo } from 'react'
import { Nav, Navbar,Container } from 'react-bootstrap'

//Router
import Link  from 'next/link'
import { useRouter } from 'next/router'

import HorizontalNav from '@/components/landing-modules/partials/header/horizontal-nav'
import LandingOffcanvasHeader from '@/components/landing-modules/partials/header/landing-offcanvas-header'
interface Props{
  appName:any;
}
const Header1 = memo((props: Props) => {
  let location = useRouter();
  return (
    <Fragment>
      <Navbar expand="xl" className="nav navbar-expand-xl navbar-light iq-navbar header-hover-menu">
        <Container fluid className="navbar-inner">
          <div className="d-flex align-items-center justify-content-between w-100 landing-header">
          <LandingOffcanvasHeader/>
            <HorizontalNav/>
              <Link href="/landing-pages/home" className="navbar-brand m-0">
                  {/* <!--Logo start--> */}
                  <svg className="icon-30 text-primary" width="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
                      <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
                      <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
                      <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
                  </svg>
                  {/* <!--logo End--> */}
                  <h5 className="logo-title">{props.appName}</h5>
              </Link>
            <Nav as="ul" className=" navbar-nav  align-items-center navbar-list d-none d-xl-flex">
              <Nav.Item as="li">
                <Link className={`${location.pathname === '/landing-pages/blog' ? 'active' : ''} nav-link `} href="/landing-pages/blog">Blog</Link>
                </Nav.Item>
              <Nav.Item as="li">
                <Link className={`${location.pathname === '/landing-pages/shop' ? 'active' : ''} nav-link `} href="/landing-pages/shop"> Shop</Link>
                </Nav.Item>
              <Nav.Item as="li">
                <Link className={`${location.pathname === '/landing-pages/faq' ? 'active' : ''} nav-link `} href="/landing-pages/faq">Faq</Link>
                </Nav.Item>
              <Nav.Item as="li">
                <Link className={`${location.pathname === '/landing-pages/contact-us' ? 'active' : ''} nav-link `} href="/landing-pages/contact-us">Contact Us</Link></Nav.Item>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  )
})
Header1.displayName="Header1"
export default Header1