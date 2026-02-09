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


const ExcelReportsVerticalNav = memo(() => {

    const [activeMenu, setActiveMenu] = useState('')
    let location = useRouter();
    return (
         <Fragment>
            <Accordion as="ul" className="navbar-nav iq-main-menu">
                <Nav.Item as="li" className="static-item">
                    <Nav.Link className="static-item disabled" href="#">
                        <span className="default-icon">Excel Reports</span>
                        <span className="mini-icon">-</span>
                    </Nav.Link>
                </Nav.Item>
                
                {/* Company Reports */}
                <Accordion.Item eventKey="Company" as="li" bsPrefix={`nav-item  ${location.pathname === '/excel-report/company/inventory-reprots' || location.pathname === '/excel-report/company/invoice-reports' || location.pathname === '/excel-report/company/order-reports' || location.pathname === '/excel-report/company/purchase-report' || location.pathname === '/excel-report/company/stocks-and-sales-report' || location.pathname === '/excel-report/company/payment-report/expense' || location.pathname === '/excel-report/company/payment-report/receive' ? 'active' : ''} `} >
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
        </Fragment>
    )
})

ExcelReportsVerticalNav.displayName="ExcelReportsVerticalNav"
export default ExcelReportsVerticalNav
