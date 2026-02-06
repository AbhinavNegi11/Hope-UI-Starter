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


const Companyvarticalnav = memo(() => {

    const [activeMenu, setActiveMenu] = useState('')
    let location = useRouter();
    return (
         <Fragment>
            <Accordion as="ul" className="navbar-nav iq-main-menu">
                <Nav.Item as="li" className="static-item">
                    <Nav.Link className="static-item disabled" href="#">
                        <span className="default-icon">Company</span>
                        <span className="mini-icon">-</span>
                    </Nav.Link>
                </Nav.Item>
                         
                              <SidebarMenu isTag="true" pathname='/Company/Add-party' title='Add Party' minititle='AP'>
                <i className="icon">
                  <svg
                    className="icon-20"
                    width="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* background */}
                    <path
                      opacity="0.4"
                      d="M4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2Z"
                      fill="currentColor"
                    />

                    {/* person */}
                    <path
                      d="M9 11C10.6569 11 12 9.65685 12 8C12 6.34315 10.6569 5 9 5C7.34315 5 6 6.34315 6 8C6 9.65685 7.34315 11 9 11Z
         M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17H5Z"
                      fill="currentColor"
                    />

                    {/* plus */}
                    <path
                      d="M16 9V7M16 7V5M16 7H18M16 7H14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </i>

              </SidebarMenu>
              <SidebarMenu isTag="true" pathname='/Company/Company-details' title='Company Details' minititle='CD'>
                <i className="icon">
                  <svg
                    className="icon-20"
                    width="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* background */}
                    <path
                      opacity="0.4"
                      d="M4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2Z"
                      fill="currentColor"
                    />

                    {/* building */}
                    <path
                      d="M7 17V8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8V17H14V14H10V17H7Z
         M9 9H11V11H9V9ZM13 9H15V11H13V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>

              </SidebarMenu>
            </Accordion>
        </Fragment>
    )
})
Companyvarticalnav.displayName = "Companyvarticalnav"
export default Companyvarticalnav