import React,{memo,Fragment, ReactNode} from 'react'

//Router
import Link from 'next/link'
import { useRouter } from 'next/router'

//React-bootstrap
import { Nav, Tooltip, OverlayTrigger } from 'react-bootstrap'

interface Props{
  isTag?: string
  pathname?: any
  title?: string
  staticIcon?: string
  minititle?: string
  modalopen?: any
  target?: any 
  children?: any
}

const SidebarMenu = memo((props:Props) => {
    //location
    let location = useRouter();
  return (
    <Fragment>
      {props.isTag === 'true' &&
        <li className={`${location.pathname === `${props.pathname}` ? 'active' : ''} nav-item `}>
          <Link className={`${location.pathname === `${props.pathname}` ? 'active' : ''} nav-link `} aria-current="page" href={props.pathname} onClick={props.modalopen} target={props.target}>
              <OverlayTrigger placement="right" overlay={<Tooltip>{props.title}</Tooltip>}>
                {props.children}
              </OverlayTrigger>
              <span className="item-name">{props.title}</span>
          </Link>
      </li>
      }
      {
        props.isTag === 'false' &&
        <Nav.Item as="li">
          <Link className={`${location.pathname === `${props.pathname}` ? 'active' : ''} nav-link`} href={props.pathname} onClick={props.modalopen} target={props.target}>
              { props.staticIcon === 'true' &&
                <i className="icon">
                  <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                      <g>
                          <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                      </g>
                  </svg>
                </i>
              }
              {props.children}
              <OverlayTrigger placement="right" overlay={<Tooltip>{props.title}</Tooltip>}>
                  <i className="sidenav-mini-icon" > {props.minititle} </i>
              </OverlayTrigger>
              <span className="item-name"> {props.title} </span>
          </Link>
        </Nav.Item>
      }
    </Fragment>
  )
})

SidebarMenu.displayName = "SidebarMenu"
export default SidebarMenu       