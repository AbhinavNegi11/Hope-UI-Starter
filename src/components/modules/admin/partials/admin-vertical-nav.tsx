import React, { useState, useContext, memo, Fragment, ReactNode } from 'react'

// Router
import Link from 'next/link'
import { useRouter } from 'next/router'

// React-bootstrap
import { Nav, Accordion, AccordionContext } from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
// component
import SidebarMenu from '@/components/partials/components/sidebar/sidebar-menu'


interface Props {
    children?: ReactNode
    eventKey?: any
    onClick?: any
    active?: any
    className?: string
    isCurrentEventKey?: any;
}

function CustomToggle(props: Props) {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(props.eventKey, (active) => props.onClick({ state: !active, eventKey: props.eventKey }));

    const isCurrentEventKey = activeEventKey === props.eventKey;

    return (
        <Link href="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className={`nav-link ${props.className}`} role="button" onClick={(e) => {
            decoratedOnClick(props.isCurrentEventKey)
        }}>
            {props.children}
        </Link>
    );
}


const Adminvarticalnav = memo(() => {

    const [activeMenu, setActiveMenu] = useState('')
    let location = useRouter();
    return (
         <Fragment>
            <Accordion as="ul" className="navbar-nav iq-main-menu">
                <Nav.Item as="li" className="static-item">
                    <Nav.Link className="static-item disabled" href="#">
                        <span className="default-icon">Admin</span>
                        <span className="mini-icon">-</span>
                    </Nav.Link>
                </Nav.Item>
                
                {/* Company Management */}
                <Accordion.Item eventKey="Company" as="li" bsPrefix={`nav-item  ${location.pathname === '/admin/my-company' || location.pathname === '/admin/gst-details' ? 'active' : ''} `} >
                    <CustomToggle className="nav-link" eventKey="Company" active={activeMenu === 'Company' ? true : false} onClick={(activeKey: any) => setActiveMenu(activeKey)} >
                             <i className="icon">
                    <svg
                      width="20"
                      className="icon-20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M3 6C3 4.9 3.9 4 5 4H9L11 6H19C20.1 6 21 6.9 21 8V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V6Z"
                        fill="currentColor"
                      />
                      <path d="M3 8H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </i>
                  <span className="item-name">Company Management</span>
                  <i className="right-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" className="icon-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="Company">
                        <ul className="sub-nav">
                            <SidebarMenu isTag="false" staticIcon="true" pathname='/admin/my-company' title='My Company' minititle='MC' />
                            <SidebarMenu isTag="false" staticIcon="true" pathname='/admin/gst-details' title='GST Details' minititle='GST' />
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>

                {/* Product Management */}
                <Accordion.Item eventKey="Product" as="li" bsPrefix={`nav-item ${location.pathname === '/admin/product' || location.pathname === '/admin/product-offer' || location.pathname === '/admin/pack' || location.pathname === '/admin/simple-unit' ? 'active' : ''}`} >
                    <CustomToggle className="nav-link" eventKey="Product" active={activeMenu === 'Product' ? true : false} onClick={(activeKey: any) => setActiveMenu(activeKey)} >
                             <i className="icon">
                    <svg
                      width="20"
                      className="icon-20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M6 2H14L20 8V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2Z"
                        fill="currentColor"
                      />
                      <path d="M8 12H16M8 16H13M8 8H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </i>
                  <span className="item-name">Product Management</span>
                  <i className="right-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" className="icon-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="Product">
                        <ul className="sub-nav">
                            <SidebarMenu isTag="false" staticIcon="true" pathname='/admin/product' title='Products' minititle='P' />
                            <SidebarMenu isTag="false" staticIcon="true" pathname='/admin/product-offer' title='Product Offers' minititle='PO' />
                            <SidebarMenu isTag="false" staticIcon="true" pathname='/admin/pack' title='Packages' minititle='PK' />
                            <SidebarMenu isTag="false" staticIcon="true" pathname='/admin/simple-unit' title='Units' minititle='U' />
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>

                {/* Inventory */}
                <SidebarMenu isTag="true" pathname='/admin/inventory' title='Inventory' minititle='INV'>
                  <i className="icon">
                    <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M3 7L12 2L21 7V17L12 22L3 17V7Z" fill="currentColor" />
                      <path d="M3 7L12 12L21 7M12 12V22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </i>
                </SidebarMenu>

                {/* User Login */}
                <SidebarMenu isTag="true" pathname='/admin/user-login' title='User Login' minititle='UL'>
                  <i className="icon">
                    <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="currentColor" />
                      <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </i>
                </SidebarMenu>

            </Accordion>
        </Fragment>
    )
})

Adminvarticalnav.displayName="Adminvarticalnav"
export default Adminvarticalnav
