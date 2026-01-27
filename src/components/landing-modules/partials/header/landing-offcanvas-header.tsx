import React, { Fragment, memo ,useState} from 'react'
import { Nav,Offcanvas,Container,Collapse} from 'react-bootstrap'

//Router
import Link  from 'next/link'
import { useRouter } from 'next/router'

const LandingOffcanvasHeader = memo(() => {
  const [open, setOpen] = useState(false);
    //location
    let location =  useRouter();
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Fragment>
      
        <button data-trigger="navbar_main" className="d-xl-none btn btn-primary rounded-pill p-1 pt-0" type="button" onClick={handleShow}>
          <svg width="20px" height="20px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
          </svg>
      </button>
      <Offcanvas show={show} onHide={handleClose} className="mobile-offcanvas nav navbar navbar-expand-xl hover-nav">
         <Container fluid className="p-lg-0">
          <Offcanvas.Header closeButton>       
              <div className="navbar-brand">
                  <svg width="30" className="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
                      <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
                      <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
                      <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
                  </svg>
                  <h4 className="logo-title">Hope UI</h4>
              </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <div className="landing-header">
          <Nav as="ul" className="navbar-nav iq-nav-menu  list-unstyled" id="header-menu">
      <Nav.Item as="li">
          <Link className={`${location.pathname === '/landing-pages' ? 'active' : ''} nav-link `} href="#" onClick={() => setOpen(!open)}aria-controls="example-collapse-text" aria-expanded={open}>
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
                  <Link className={`${location.pathname === '/landing-pages/sass-marketing-page' ? 'active' : ''} nav-link `} href="/landing-pages/sass-marketing-landing-page">
                    Saas Marketing Landing Page
                  </Link>
              </Nav.Item>
              <Nav.Item as="li">
                  <Link className={`${location.pathname === '/landing-pages/software-landing-page' ? 'active' : ''} nav-link `} href="/landing-pages/software-landing-page">
                      Software Landing Page
                  </Link>
              </Nav.Item>
              <Nav.Item as="li">
                  <Link className={`${location.pathname === '/landing-pages/software-landing-page' ? 'active' : ''} nav-link `} href="/landing-pages/start-up-landing-page">
                    Startup Landing Page
                  </Link>
              </Nav.Item>
          </Nav>
      </Nav.Item>
      <Nav.Item as="li">
        <Link className={`${location.pathname === '/landing-pages/aboutUS' ? 'active' : ''} nav-link `} href="/landing-pages/aboutUS">About Us </Link>
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
           
      </div>
          </Offcanvas.Body>
         </Container>
      </Offcanvas>  
    </Fragment>
  )
})
LandingOffcanvasHeader.displayName="LandingOffcanvasHeader"
export default LandingOffcanvasHeader