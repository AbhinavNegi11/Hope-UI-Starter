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


const GeneralReportsverticalnav = memo(() => {

    const [activeMenu, setActiveMenu] = useState('')
    let location = useRouter();
    return (
        <Fragment>
            <Accordion as="ul" className="navbar-nav iq-main-menu">
                <Nav.Item as="li" className="static-item">
                    <Nav.Link className="static-item disabled" href="#">
                        <span className="default-icon">General Reports</span>
                        <span className="mini-icon">-</span>
                    </Nav.Link>
                </Nav.Item>
                <SidebarMenu isTag="true" pathname='/General-Reports/Account-report' title='Account Report' minititle='AR'>
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
                                d="M7 8H17M7 12H17M7 16H13"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />

                            <path
                                d="M17 15C18.1046 15 19 15.8954 19 17C19 18.1046 18.1046 19 17 19C15.8954 19 15 18.1046 15 17C15 15.8954 15.8954 15 17 15Z"
                                fill="currentColor"
                            />
                        </svg>
                    </i>


                </SidebarMenu>

            </Accordion>
        </Fragment>
    )
})
GeneralReportsverticalnav.displayName = "GeneralReportsverticalnav"
export default GeneralReportsverticalnav