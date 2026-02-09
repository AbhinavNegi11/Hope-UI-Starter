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


const Accountingvarticalnav = memo(() => {

    const [activeMenu, setActiveMenu] = useState('')
    let location = useRouter();
    return (
         <Fragment>
            <Accordion as="ul" className="navbar-nav iq-main-menu">
                <Nav.Item as="li" className="static-item">
                    <Nav.Link className="static-item disabled" href="#">
                        <span className="default-icon">Accounting</span>
                        <span className="mini-icon">-</span>
                    </Nav.Link>
                </Nav.Item>
                
                <Accordion.Item eventKey="CD" as="li" bsPrefix={`nav-item  ${location.pathname === '/accounting/credit-debit-note/credit' || location.pathname === '/accounting/credit-debit-note/debit' ? 'active' : '' } `} >
                    <CustomToggle className="nav-link" eventKey="CD" active={activeMenu === 'CD' ? true : false} onClick={(activeKey: any) => setActiveMenu(activeKey)} >
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
                    <Accordion.Collapse eventKey="CD" >
                        <ul className="sub-nav " >
                            <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/credit-debit-note/credit' title='Credit' minititle='CR'></SidebarMenu>
                            <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/credit-debit-note/debit' title='Debit' minititle='DB'></SidebarMenu>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="Employee" bsPrefix={`nav-item   ${location.pathname === '/accounting/employee/employee-details' ? 'active' : '' || location.pathname === '/accounting/employee/salary-slip' ? 'active' : '' || location.pathname === '/accounting/employee/salary' ? 'active' : '' || activeMenu === 'Employee' ? 'active' : ''}`}  >
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
                    <Accordion.Collapse eventKey="Employee" >
                        <ul className="sub-nav " >
                            <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/employee/employee-details' title='Employee Details' minititle='E'></SidebarMenu>
                            <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/employee/salary-slip' title='Salary-slip' minititle='SS'></SidebarMenu>
                            <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/employee/salary' title='Salary' minititle='S'></SidebarMenu>

                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="Invoice" bsPrefix={`nav-item   ${location.pathname === '/accounting/invoice/add-invoice' ? 'active' : '' || location.pathname === '/accounting/invoice/view-invoice' ? 'active' : ''  || activeMenu === 'Employee' ? 'active' : ''}`}  >
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
                    <Accordion.Collapse eventKey="Invoice" >
                        <ul className="sub-nav " >
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/invoice/add-invoice' title=' Add-invoice' minititle='Ai'></SidebarMenu>
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/invoice/view-invoice' title=' View-invoice' minititle='Vi'></SidebarMenu>

                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="Order" bsPrefix={`nav-item   ${location.pathname === '/accounting/order/add-order' ? 'active' : '' || location.pathname === '/accounting/order/view-order' ? 'active' : ''  || activeMenu === 'Order' ? 'active' : ''}`}  >
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
                    <Accordion.Collapse eventKey="Order" >
                        <ul className="sub-nav " >
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/order/add-order' title=' Add-order' minititle='Ao'></SidebarMenu>
                      <SidebarMenu isTag="false" staticIcon="true" pathname='/accounting/order/view-order' title=' View-order' minititle='Vo'></SidebarMenu>

                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                
                 <Accordion.Item as="li" eventKey="Purchase" bsPrefix={`nav-item   ${location.pathname === '/accounting/purchase/add-purchase' ? 'active' : '' || location.pathname === '/accounting/purchase/view-purchase' ? 'active' : ''  || activeMenu === 'Purchase' ? 'active' : ''}`}  >
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
                    <Accordion.Collapse eventKey="Purchase" >
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
        </Fragment>
    )
})
Accountingvarticalnav.displayName = "Accountingvarticalnav"
export default Accountingvarticalnav