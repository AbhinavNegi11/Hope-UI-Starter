import { memo, Fragment } from 'react'

//React-bootstrap
import { Offcanvas, Navbar, Container, Nav, Button } from 'react-bootstrap'

//Router
import Link from 'next/link'
import { useRouter } from 'next/router'

const HorizontalNav = memo(() => {

    //location
    let location = useRouter();
    return (
        <Fragment>
            <Navbar expand="xl" id="navbar_main" className="mobile-offcanvas  hover-nav horizontal-nav mx-md-auto ">
                <Container fluid>
                    <Offcanvas.Header closeButton>
                        <Navbar.Brand>
                            <svg width="30" className="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor" />
                                <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor" />
                                <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor" />
                                <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor" />
                            </svg>
                            <h4 className="logo-title">Hope UI</h4>
                        </Navbar.Brand>
                        <Button className="close float-end"></Button>
                    </Offcanvas.Header>
                    <div className={`${location.pathname === '/menu-styles/dual-horizontal' ? 'navbar-nav' : 'iq-nav-menu'} list-unstyled`}>
                        <Nav.Item as="li"><Link className={`nav-link ${location.pathname === "/menu-styles/horizontal" ? 'active' : ''}`} href="/menu-styles/horizontal"> Horizontal </Link></Nav.Item>
                        <Nav.Item as="li"><Link className={`nav-link ${location.pathname === "/menu-styles/dual-horizontal" ? 'active' : ''}`} href="/menu-styles/dual-horizontal"> Dual Horizontal </Link></Nav.Item>
                        <Nav.Item as="li"><Link className={`nav-link ${location.pathname === "/menu-styles/dual-compact" ? 'active' : ''}`} href="/menu-styles/dual-compact"><span className="item-name">Dual Compact</span></Link></Nav.Item>
                        <Nav.Item as="li"><Link className={`nav-link ${location.pathname === "/menu-styles/boxed" ? 'active' : ''}`} href="/menu-styles/boxed"> Boxed Horizontal </Link></Nav.Item>
                        <Nav.Item as="li"><Link className={`nav-link ${location.pathname === "/menu-styles/boxedfancy" ? 'active' : ''}`} href="/menu-styles/boxedfancy"> Boxed Fancy</Link></Nav.Item>
                    </div>
                </Container>
            </Navbar>
        </Fragment>
    )
})

HorizontalNav.displayName = "HorizontalNav"
export default HorizontalNav
