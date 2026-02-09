import React, { ReactNode, useState, useContext, memo, Fragment } from 'react'

//Router
import { useRouter } from 'next/router'
import Link from 'next/link'

//React-bootstrap
import { Accordion, AccordionContext, Nav, Tooltip, OverlayTrigger, Collapse } from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
//Componets
import SidebarMenu from '../../components/sidebar/sidebar-menu'
import Modalpopup from '@/components/modules/auth/modal-popup'

// interface
interface Props {
    active?: any;
    children: ReactNode
    eventKey?: any
    onClick: any
    className?: string
}

function CustomToggle(props: Props) {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(props.eventKey, (active) => props.onClick({ state: !active, eventKey: props.eventKey }));

    const isCurrentEventKey: any = activeEventKey === props.eventKey;

    return (
        <Link href="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className={`nav-link ${props.className}`} role="button" onClick={(e) => {
            decoratedOnClick(isCurrentEventKey)
        }}>
            {props.children}
        </Link>
    );
}


const VerticalNav = memo(() => {
    const [activeMenu, setActiveMenu]: any = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [active, setActive] = useState('')  
        let location = useRouter();

    return (
    <Fragment>
      <Accordion as="ul" className="navbar-nav iq-main-menu">

        {/* <Accordion
  as="ul"
  activeKey={activeMenu}
  onSelect={(key) => setActiveMenu(key)}
  className="navbar-nav iq-main-menu"
> */}
        <li className="nav-item static-item">
          <Link className="nav-link static-item disabled" href="#">
            <span className="default-icon">Home</span>
            <span className="mini-icon">-</span>
          </Link>
        </li>

        <li
          className={`${location.pathname === "/" ? "active" : ""} nav-item `}
        >
          <Link
            href="/"
            className={`${location.pathname === "/" ? "active" : ""} nav-link `}
            aria-current="page"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Dashboard</Tooltip>}
            >
              <i className="icon">
                <svg
                  className="icon-20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Dashboard</span>
          </Link>
        </li>

        <Accordion.Item as="li" eventKey="sidebar-Accounting" bsPrefix={`nav-item ${active === 'accounting' ? 'active' : ''} `} onClick={() => setActive('accounting')} >
          <CustomToggle eventKey="sidebar-Accounting" onClick={(activeKey: any) => setActiveMenu(activeKey)}>
            <OverlayTrigger placement="right" overlay={<Tooltip>Accounting</Tooltip>}>
              <i className="icon">
                <svg
                  className="icon-20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z"
                    fill="currentColor"
                  />
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Accounting</span>
            <i className="right-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-18"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-Accounting" >
            <ul className="sub-nav">

              <Accordion as="ul" className="navbar-nav  sub-nav iq-main-menu">
                <Accordion.Item as="li" eventKey="CD" bsPrefix={`nav-item   ${location.pathname === '/accounting/credit-debit-note/credit' || location.pathname === '/accounting/credit-debit-note/debit' ? 'active' : ''}`}  >
                  <CustomToggle eventKey="CD" onClick={(activeKey: any) => setActiveMenu(activeKey)} className="nav-link" >
                   
                     <i className="icon">
                    <svg
                      width="20"
                      className="icon-20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Folder body */}
                      <path
                        opacity="0.4"
                        d="M3 6C3 4.9 3.9 4 5 4H9L11 6H19C20.1 6 21 6.9 21 8V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V6Z"
                        fill="currentColor"
                      />
                      {/* Folder tab */}
                      <path
                        d="M3 8H21"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </i>
                    <OverlayTrigger placement="right" overlay={<Tooltip>Credit-Debit-Note</Tooltip>}>
                      <i className="sidenav-mini-icon">CD</i>
                    </OverlayTrigger>

                   <span className="item-name">Credit-Debit-Note</span>
                  <i className="right-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      className="icon-18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </i>
                  </CustomToggle>
                  <Accordion.Collapse eventKey="CD">
                    <ul className="sub-nav " >
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/credit-debit-note/credit' title='Credit ' minititle='C'></SidebarMenu>
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/credit-debit-note/debit' title=' Debit' minititle='D'></SidebarMenu>

                    </ul>
                  </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="Employee" bsPrefix={`nav-item   ${location.pathname === '/accounting/employee/employee-details' ? 'active' : '' || location.pathname === '/accounting/employee/salary-slip' ? 'active' : '' || location.pathname === '/accounting/employee/salary' ? 'active' : ''}`}  >
                  <CustomToggle eventKey="Employee" onClick={(activeKey: any) => setActiveMenu(activeKey)} className="nav-link" >
                   
                     <i className="icon">
                    <svg
                      width="20"
                      className="icon-20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Head */}
                      <path
                        opacity="0.4"
                        d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                        fill="currentColor"
                      />
                      {/* Body */}
                      <path
                        d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </i>
                    <OverlayTrigger placement="right" overlay={<Tooltip>Employee</Tooltip>}>
                      <i className="sidenav-mini-icon">EM</i>
                    </OverlayTrigger>

                  <span className="item-name">Employee</span>
                  <i className="right-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      className="icon-18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </i>
                  </CustomToggle>
                  <Accordion.Collapse eventKey="Employee">
                    <ul className="sub-nav " >
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/employee/employee-details' title='Employee Details' minititle='E'></SidebarMenu>
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/employee/salary-slip' title=' Salary slip' minititle='SD'></SidebarMenu>
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/employee/salary' title=' Salary ' minititle='S'></SidebarMenu>

                    </ul>
                  </Accordion.Collapse>
                </Accordion.Item>

                <Accordion.Item as="li" eventKey="Invoice" bsPrefix={`nav-item   ${location.pathname === '/accounting/invoice/add-invoice' ? 'active' : '' || location.pathname === '/accounting/invoice/view-invoice' ? 'active' : ''  }`}  >
                  <CustomToggle eventKey="Invoice" onClick={(activeKey: any) => setActiveMenu(activeKey)} className="nav-link" >
                   
                     <i className="icon">
                    <svg
                      width="20"
                      className="icon-20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Document body */}
                      <path
                        opacity="0.4"
                        d="M6 2H14L20 8V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2Z"
                        fill="currentColor"
                      />
                      {/* Invoice lines */}
                      <path
                        d="M8 12H16M8 16H13M8 8H12"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </i>

                  {/* MINI ICON */}
                   <OverlayTrigger placement="right" overlay={<Tooltip>Invoice</Tooltip>}>
                      <i className="sidenav-mini-icon">IN</i>
                    </OverlayTrigger>

                  <span className="item-name">Invoice</span>
                  <i className="right-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      className="icon-18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </i>
                   

                
                  </CustomToggle>
                  <Accordion.Collapse eventKey="Invoice">
                    <ul className="sub-nav " >
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/invoice/add-invoice' title=' Add-invoice' minititle='Ai'></SidebarMenu>
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/invoice/view-invoice' title=' View-invoice' minititle='Vi'></SidebarMenu>

                    </ul>
                  </Accordion.Collapse>
                </Accordion.Item>
              
                <Accordion.Item as="li" eventKey="Order" bsPrefix={`nav-item   ${location.pathname === '/accounting/order/add-order' ? 'active' : '' || location.pathname === '/accounting/order/view-order' ? 'active' : ''  }`}  >
                  <CustomToggle eventKey="Order" onClick={(activeKey: any) => setActiveMenu(activeKey)} className="nav-link" >
                   
                     <i className="icon">
                    <svg
                      width="20"
                      className="icon-20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Box / package */}
                      <path
                        opacity="0.4"
                        d="M3 7L12 2L21 7V17L12 22L3 17V7Z"
                        fill="currentColor"
                      />
                      {/* Box details */}
                      <path
                        d="M3 7L12 12L21 7M12 12V22"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>

                  {/* MINI ICON */}
                   <OverlayTrigger placement="right" overlay={<Tooltip>Order</Tooltip>}>
                      <i className="sidenav-mini-icon">O</i>
                    </OverlayTrigger>

                  <span className="item-name">Order</span>
                     <i className="right-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      className="icon-18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </i>
                   
                 

              
               
                
                  </CustomToggle>
                  <Accordion.Collapse eventKey="Order">
                    <ul className="sub-nav " >
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/order/add-order' title=' Add-order' minititle='Ao'></SidebarMenu>
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/order/view-order' title=' View-order' minititle='Vo'></SidebarMenu>

                    </ul>
                  </Accordion.Collapse>
                </Accordion.Item>
                
                <Accordion.Item as="li" eventKey="Purchase" bsPrefix={`nav-item   ${location.pathname === '/accounting/purchase/add-purchase' ? 'active' : '' || location.pathname === '/accounting/purchase/view-purchase' ? 'active' : ''  }`}  >
                  <CustomToggle eventKey="Purchase" onClick={(activeKey: any) => setActiveMenu(activeKey)} className="nav-link" >
                   
                       <i className="icon">
                    <svg
                      width="20"
                      className="icon-20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Cart body */}
                      <path
                        opacity="0.4"
                        d="M4 5H6L7.5 15H18.5L20 8H8"
                        fill="currentColor"
                      />
                      {/* Cart handle */}
                      <path
                        d="M6 5H4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      {/* Wheels */}
                      <circle cx="9" cy="18" r="1.5" fill="currentColor" />
                      <circle cx="16" cy="18" r="1.5" fill="currentColor" />
                    </svg>
                  </i>

                  {/* MINI ICON */}
                   <OverlayTrigger placement="right" overlay={<Tooltip>Purchase</Tooltip>}>
                      <i className="sidenav-mini-icon">Pr</i>
                    </OverlayTrigger>

                  <span className="item-name">Purchase</span>
                 

                  {/* MINI ICON */}
                 
                  <i className="right-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      className="icon-18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </i>
                   

                
                  </CustomToggle>
                  <Accordion.Collapse eventKey="Purchase">
                    <ul className="sub-nav " >
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/purchase/add-purchase' title=' Add-purcahse' minititle='Ai'></SidebarMenu>
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/purchase/view-purchase' title=' View-purcahse' minititle='Vi'></SidebarMenu>

                    </ul>
                  </Accordion.Collapse>
                </Accordion.Item>
                <SidebarMenu isTag="true" pathname='/accounting/payments' title='Payments' minititle='P'>
                            <i className="icon">
                      <svg
                        width="20"
                        className="icon-20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Card / wallet base */}
                        <path
                          opacity="0.4"
                          d="M3 6C3 4.9 3.9 4 5 4H19C20.1 4 21 4.9 21 6V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V6Z"
                          fill="currentColor"
                        />
                        {/* Card stripe */}
                        <path
                          d="M3 9H21"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        {/* Payment dot */}
                        <circle cx="17" cy="14" r="1.5" fill="currentColor" />
                      </svg>
                    </i>
                </SidebarMenu>
              </Accordion>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>



{/*=-- Admin--*/}
<Accordion.Item as="li" eventKey="sidebar-Admin" bsPrefix={`nav-item ${active === 'Admin' ? 'active' : ''} `} onClick={() => setActive('Admin')} >
  <CustomToggle eventKey="sidebar-Admin" onClick={(activeKey: any) => setActiveMenu(activeKey)}>
    <OverlayTrigger placement="right" overlay={<Tooltip>Admin</Tooltip>}>
      <i className="icon">
        <svg 
        className="icon-20"
         width="20"
         viewBox="0 0 24 24"
          fill="none"
           xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5227 7.39601V8.92935C19.2451 9.46696 20.5 11.0261 20.5 12.8884V17.8253C20.5 20.1308 18.5886 22 16.2322 22H7.7688C5.41136 22 3.5 20.1308 3.5 17.8253V12.8884C3.5 11.0261 4.75595 9.46696 6.47729 8.92935V7.39601C6.48745 4.41479 8.95667 2 11.9848 2C15.0535 2 17.5227 4.41479 17.5227 7.39601ZM12.0051 3.73904C14.0678 3.73904 15.7445 5.37871 15.7445 7.39601V8.7137H8.25553V7.37613C8.26569 5.36878 9.94232 3.73904 12.0051 3.73904ZM12.8891 16.4549C12.8891 16.9419 12.4928 17.3294 11.9949 17.3294C11.5072 17.3294 11.1109 16.9419 11.1109 16.4549V14.2488C11.1109 13.7718 11.5072 13.3843 11.9949 13.3843C12.4928 13.3843 12.8891 13.7718 12.8891 14.2488V16.4549Z" fill="currentColor"></path>
        </svg>
      </i>
    </OverlayTrigger>
    <span className="item-name">Admin</span>
    <i className="right-icon">
      <svg xmlns="http://www.w3.org/2000/svg" className="icon-18" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </i>
  </CustomToggle>

  <Accordion.Collapse eventKey="sidebar-Admin">
    <ul className="sub-nav">
      <Accordion as="ul" className="navbar-nav sub-nav iq-main-menu">
        {/* Company Management */}
        <Accordion.Item as="li" eventKey="Company" bsPrefix={`nav-item ${location.pathname === '/admin/my-company' ? 'active' : '' || location.pathname === '/admin/gst-details' ? 'active' : ''}`} >
          <CustomToggle eventKey="Company" onClick={(activeKey: any) => setActiveMenu(activeKey)} className="nav-link" >
            <i className="icon">
              <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M3 6C3 4.9 3.9 4 5 4H9L11 6H19C20.1 6 21 6.9 21 8V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V6Z" fill="currentColor" />
                <path d="M3 8H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </i>
            <OverlayTrigger placement="right" overlay={<Tooltip>Company Management</Tooltip>}>
              <i className="sidenav-mini-icon">CM</i>
            </OverlayTrigger>
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
        <Accordion.Item as="li" eventKey="Product" bsPrefix={`nav-item ${location.pathname === '/admin/product' ? 'active' : '' || location.pathname === '/admin/product-offer' ? 'active' : '' || location.pathname === '/admin/pack' ? 'active' : '' || location.pathname === '/admin/simple-unit' ? 'active' : ''}`} >
          <CustomToggle eventKey="Product" onClick={(activeKey: any) => setActiveMenu(activeKey)} className="nav-link" >
            <i className="icon">
              <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M6 2H14L20 8V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2Z" fill="currentColor" />
                <path d="M8 12H16M8 16H13M8 8H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </i>
            <OverlayTrigger placement="right" overlay={<Tooltip>Product Management</Tooltip>}>
              <i className="sidenav-mini-icon">PM</i>
            </OverlayTrigger>
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
    </ul>
  </Accordion.Collapse>
</Accordion.Item>

{/*=-- Excel Reports--*/}
<Accordion.Item as="li" eventKey="sidebar-ExcelReports" bsPrefix={`nav-item ${active === 'ExcelReports' ? 'active' : ''} `} onClick={() => setActive('ExcelReports')} >
  <CustomToggle eventKey="sidebar-ExcelReports" onClick={(activeKey: any) => setActiveMenu(activeKey)}>
    <OverlayTrigger placement="right" overlay={<Tooltip>Excel Reports</Tooltip>}>
      <i className="icon">
        <svg 
        className="icon-20"
         width="20"
         viewBox="0 0 24 24"
          fill="none"
           xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.4"
            d="M4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2Z"
            fill="currentColor"
          />
          <path
            d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z"
            fill="currentColor"
          />
        </svg>
      </i>
    </OverlayTrigger>
    <span className="item-name">Excel Reports</span>
    <i className="right-icon">
      <svg xmlns="http://www.w3.org/2000/svg" className="icon-18" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </i>
  </CustomToggle>

  <Accordion.Collapse eventKey="sidebar-ExcelReports">
    <ul className="sub-nav">
      <Accordion as="ul" className="navbar-nav sub-nav iq-main-menu">
        {/* Company Reports */}
        <Accordion.Item as="li" eventKey="Company" bsPrefix={`nav-item ${location.pathname === '/excel-report/company/inventory-reprots' || location.pathname === '/excel-report/company/invoice-reports' || location.pathname === '/excel-report/company/order-reports' || location.pathname === '/excel-report/company/purchase-report' || location.pathname === '/excel-report/company/stocks-and-sales-report' || location.pathname === '/excel-report/company/payment-report/expense' || location.pathname === '/excel-report/company/payment-report/receive' ? 'active' : ''}`} >
          <CustomToggle eventKey="Company" onClick={(activeKey: any) => setActiveMenu(activeKey)} className="nav-link" >
            <i className="icon">
              <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M3 6C3 4.9 3.9 4 5 4H9L11 6H19C20.1 6 21 6.9 21 8V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V6Z" fill="currentColor" />
                <path d="M3 8H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </i>
            <OverlayTrigger placement="right" overlay={<Tooltip>Company Reports</Tooltip>}>
              <i className="sidenav-mini-icon">CR</i>
            </OverlayTrigger>
            <span className="item-name">Company Reports</span>
            <i className="right-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" className="icon-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="Company">
            <ul className="sub-nav">
              <SidebarMenu isTag="false" staticIcon="true" pathname='/excel-report/company/inventory-reprots' title='Inventory Reports' minititle='IR' />
              <SidebarMenu isTag="false" staticIcon="true" pathname='/excel-report/company/invoice-reports' title='Invoice Reports' minititle='INR' />
              <SidebarMenu isTag="false" staticIcon="true" pathname='/excel-report/company/order-reports' title='Order Reports' minititle='OR' />
              <SidebarMenu isTag="false" staticIcon="true" pathname='/excel-report/company/purchase-report' title='Purchase Report' minititle='PR' />
              <SidebarMenu isTag="false" staticIcon="true" pathname='/excel-report/company/stocks-and-sales-report' title='Stocks & Sales' minititle='SS' />
              <SidebarMenu isTag="false" staticIcon="true" pathname='/excel-report/company/payment-report/expense' title='Expense' minititle='EX' />
              <SidebarMenu isTag="false" staticIcon="true" pathname='/excel-report/company/payment-report/receive' title='Receive' minititle='RC' />
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>

        {/* Client Reports */}
        <SidebarMenu isTag="true" pathname='/excel-report/client/ledger-reports' title='Ledger Reports' minititle='LR'>
          <i className="icon">
            <svg width="20" className="icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M3 7L12 2L21 7V17L12 22L3 17V7Z" fill="currentColor" />
              <path d="M3 7L12 12L21 7M12 12V22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </i>
        </SidebarMenu>
      </Accordion>
    </ul>
  </Accordion.Collapse>
</Accordion.Item>

        <Accordion.Item
          as="li"
          eventKey="sidebar-auth"
          bsPrefix={`nav-item ${active === "auth" ? "active" : ""} `}
          onClick={() => setActive("auth")}
        >
          <CustomToggle
            eventKey="sidebar-auth"
            onClick={(activeKey: any) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Auth Skins</Tooltip>}
            >
              <i className="icon">
                <svg
                  className="icon-20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M12.0865 22C11.9627 22 11.8388 21.9716 11.7271 21.9137L8.12599 20.0496C7.10415 19.5201 6.30481 18.9259 5.68063 18.2336C4.31449 16.7195 3.5544 14.776 3.54232 12.7599L3.50004 6.12426C3.495 5.35842 3.98931 4.67103 4.72826 4.41215L11.3405 2.10679C11.7331 1.96656 12.1711 1.9646 12.5707 2.09992L19.2081 4.32684C19.9511 4.57493 20.4535 5.25742 20.4575 6.02228L20.4998 12.6628C20.5129 14.676 19.779 16.6274 18.434 18.1581C17.8168 18.8602 17.0245 19.4632 16.0128 20.0025L12.4439 21.9088C12.3331 21.9686 12.2103 21.999 12.0865 22Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11.3194 14.3209C11.1261 14.3219 10.9328 14.2523 10.7838 14.1091L8.86695 12.2656C8.57097 11.9793 8.56795 11.5145 8.86091 11.2262C9.15387 10.9369 9.63207 10.934 9.92906 11.2193L11.3083 12.5451L14.6758 9.22479C14.9698 8.93552 15.448 8.93258 15.744 9.21793C16.041 9.50426 16.044 9.97004 15.751 10.2574L11.8519 14.1022C11.7049 14.2474 11.5127 14.3199 11.3194 14.3209Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Auth Skins</span>
            <i className="right-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-18"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-auth">
            <Accordion as="ul" className="navbar-nav iq-main-menu sub-nav">
              <Accordion.Item
                eventKey="auth"
                as="li"
                bsPrefix={`nav-item ${location.pathname === "/auth/sign-in"
                  ? "active"
                  : "" || location.pathname === "/auth/sign-up"
                    ? "active"
                    : "" || location.pathname === "/auth/confirm-mail"
                      ? "active"
                      : "" || location.pathname === "/auth/lock-screen"
                        ? "active"
                        : "" || location.pathname === "/auth/recoverpw"
                          ? "active"
                          : ""
                  }`}
              >
                <CustomToggle
                  eventKey="auth"
                  onClick={(activeKey: any) => setActiveMenu(activeKey)}
                  className="nav-link"
                >
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
                        d="M12.0865 22C11.9627 22 11.8388 21.9716 11.7271 21.9137L8.12599 20.0496C7.10415 19.5201 6.30481 18.9259 5.68063 18.2336C4.31449 16.7195 3.5544 14.776 3.54232 12.7599L3.50004 6.12426C3.495 5.35842 3.98931 4.67103 4.72826 4.41215L11.3405 2.10679C11.7331 1.96656 12.1711 1.9646 12.5707 2.09992L19.2081 4.32684C19.9511 4.57493 20.4535 5.25742 20.4575 6.02228L20.4998 12.6628C20.5129 14.676 19.779 16.6274 18.434 18.1581C17.8168 18.8602 17.0245 19.4632 16.0128 20.0025L12.4439 21.9088C12.3331 21.9686 12.2103 21.999 12.0865 22Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11.3194 14.3209C11.1261 14.3219 10.9328 14.2523 10.7838 14.1091L8.86695 12.2656C8.57097 11.9793 8.56795 11.5145 8.86091 11.2262C9.15387 10.9369 9.63207 10.934 9.92906 11.2193L11.3083 12.5451L14.6758 9.22479C14.9698 8.93552 15.448 8.93258 15.744 9.21793C16.041 9.50426 16.044 9.97004 15.751 10.2574L11.8519 14.1022C11.7049 14.2474 11.5127 14.3199 11.3194 14.3209Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Default</Tooltip>}
                  >
                    <i className="sidenav-mini-icon">DE</i>
                  </OverlayTrigger>
                  <span className="item-name">Default</span>
                  <i className="right-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      className="icon-18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </i>
                </CustomToggle>
                <Accordion.Collapse eventKey="auth">
                  <ul className="sub-nav">
                    <Nav.Item as="li">
                      <Link
                        className={`${location.pathname === "/auth/default/sign-in"
                          ? "active"
                          : ""
                          }nav-link`}
                        href="/auth/default/sign-in"
                      >
                        <i className="icon">
                          <svg
                            className="icon-10"
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <g>
                              <circle
                                cx="12"
                                cy="12"
                                r="8"
                                fill="currentColor"
                              ></circle>
                            </g>
                          </svg>
                        </i>
                        <OverlayTrigger
                          placement="right"
                          overlay={<Tooltip>Login</Tooltip>}
                        >
                          <i className="sidenav-mini-icon"> L </i>
                        </OverlayTrigger>
                        <i className="sidenav-mini-icon"> L </i>
                        <span className="item-name">Login</span>
                      </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Link
                        href="/auth/default/sign-up"
                        className={`${location.pathname === "/auth/default/sign-up"
                          ? "active"
                          : ""
                          } nav-link`}
                      >
                        <i className="icon">
                          <svg
                            className="icon-10"
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <g>
                              <circle
                                cx="12"
                                cy="12"
                                r="8"
                                fill="currentColor"
                              ></circle>
                            </g>
                          </svg>
                        </i>
                        <OverlayTrigger
                          placement="right"
                          overlay={<Tooltip>Register</Tooltip>}
                        >
                          <i className="sidenav-mini-icon"> R </i>
                        </OverlayTrigger>
                        <span className="item-name">Register</span>
                      </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Link
                        href="/auth/default/confirm-mail"
                        className={`${location.pathname === "/auth/default/confirm-mail"
                          ? "active"
                          : ""
                          } nav-link`}
                      >
                        <i className="icon">
                          <svg
                            className="icon-10"
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <g>
                              <circle
                                cx="12"
                                cy="12"
                                r="8"
                                fill="currentColor"
                              ></circle>
                            </g>
                          </svg>
                        </i>
                        <OverlayTrigger
                          placement="right"
                          overlay={<Tooltip>Confirm Mail</Tooltip>}
                        >
                          <i className="sidenav-mini-icon"> CM </i>
                        </OverlayTrigger>
                        <span className="item-name">Confirm Mail</span>
                      </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Link
                        href="/auth/default/lock-screen"
                        className={`${location.pathname === "/auth/default/lock-screen"
                          ? "active"
                          : ""
                          } nav-link`}
                      >
                        <i className="icon">
                          <svg
                            className="icon-10"
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <g>
                              <circle
                                cx="12"
                                cy="12"
                                r="8"
                                fill="currentColor"
                              ></circle>
                            </g>
                          </svg>
                        </i>
                        <OverlayTrigger
                          placement="right"
                          overlay={<Tooltip>Lock Screen</Tooltip>}
                        >
                          <i className="sidenav-mini-icon"> LS </i>
                        </OverlayTrigger>
                        <span className="item-name">Lock Screen</span>
                      </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Link
                        href="/auth/default/recover-password"
                        className={`${location.pathname === "/auth/default/recover-password"
                          ? "active"
                          : ""
                          } nav-link`}
                      >
                        <i className="icon">
                          <svg
                            className="icon-10"
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <g>
                              <circle
                                cx="12"
                                cy="12"
                                r="8"
                                fill="currentColor"
                              ></circle>
                            </g>
                          </svg>
                        </i>
                        <OverlayTrigger
                          placement="right"
                          overlay={<Tooltip>Recover password</Tooltip>}
                        >
                          <i className="sidenav-mini-icon"> RP </i>
                        </OverlayTrigger>
                        <span className="item-name">Recover password</span>
                      </Link>
                    </Nav.Item>
                  </ul>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="utilities-error"
          bsPrefix={`nav-item ${active === "error" ? "active" : ""} `}
          onClick={() => setActive("error")}
        >
          <CustomToggle
            eventKey="utilities-error"
            active={activeMenu === "utilities-error" ? true : false}
            onClick={(activeKey: any) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Utilities</Tooltip>}
            >
              <i className="icon">
                <svg
                  className="icon-20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M11.9912 18.6215L5.49945 21.864C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7087C4 14.4283 4.40573 14.8725 5.47299 15.37L11.9912 18.6215Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </i>
            </OverlayTrigger>
            <span className="item-name">Utilities</span>
            <i className="right-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-18"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="utilities-error">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  href="/utilities/error404"
                  className={`${location.pathname === "/utilities/error404" ? "active" : ""
                    } nav-link`}
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Error 404</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> E </i>
                  </OverlayTrigger>
                  <span className="item-name">Error 404</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  href="/utilities/error500"
                  className={`${location.pathname === "/utilities/error500" ? "active" : ""
                    } nav-link`}
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Error 500</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> E </i>
                  </OverlayTrigger>
                  <span className="item-name">Error 500</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  href="/utilities/maintenance"
                  className={`${location.pathname === "/utilities/maintenance"
                    ? "active"
                    : ""
                    } nav-link`}
                >
                  <i className="icon">
                    <svg
                      className="icon-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Maintenance</Tooltip>}
                  >
                    <i className="sidenav-mini-icon"> M </i>
                  </OverlayTrigger>
                  <span className="item-name">Maintenance</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
      </Accordion>
    </Fragment>
  );
});

VerticalNav.displayName = "VerticalNav";
export default VerticalNav;
