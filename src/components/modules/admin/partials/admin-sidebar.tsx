import React, { useEffect, memo, Fragment } from 'react'

//Siderbarlogo
import Logo from '@/components/partials/components/logo'
//Sidebarprofile
import Sidebarprofilecard from '@/components/partials/components/sidebar/sidebar-profile-card'

//Admin-vartical-nav
import Adminvarticalnav from './admin-vertical-nav'

//Scrollbar
import Scrollbar from 'smooth-scrollbar'

// Import selectors & action from setting store
import * as SettingSelector from '@/store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux';
import Link from 'next/link'

interface Props {
  app_name: any;
}
const Adminsidebar = memo((props: Props) => {

  const appName = useSelector(SettingSelector.app_name)

  const sidebarColor = useSelector(SettingSelector.sidebar_color)
  const sidebarHide = useSelector(SettingSelector.sidebar_show); 
  const sidebarType = useSelector(SettingSelector.sidebar_type) 
  const sidebarMenuStyle = useSelector(SettingSelector.sidebar_menu_style)
  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
  };
  useEffect(
    () => {
      const myScrollbarElement = document.querySelector('#my-scrollbar') as HTMLElement;
      if (myScrollbarElement !== null) {
        Scrollbar.init(myScrollbarElement);
      }
      window.addEventListener("resize", () => {
        const sidebarResponsive = document.querySelector(
          '[data-sidebar="responsive"]'
        );
        if (window.innerWidth < 1025) {
          if (sidebarResponsive !== null) {
            if (!sidebarResponsive.classList.contains("sidebar-mini")) {
              sidebarResponsive.classList.add("sidebar-mini", "on-resize");
            }
          }
        } else {
          if (sidebarResponsive !== null) {
            if (
              sidebarResponsive.classList.contains("sidebar-mini") &&
              sidebarResponsive.classList.contains("on-resize")
            ) {
              sidebarResponsive.classList.remove("sidebar-mini", "on-resize");
            }
          }
        }
      });
    }
  )
  return (
    <Fragment>
      <aside className={`${sidebarColor} ${sidebarType.join(" ")} ${sidebarMenuStyle} ${sidebarHide.length > 0 ? 'sidebar-none' : 'sidebar'} sidebar-base`} data-sidebar="responsive">

        <div className='sidebar-header d-flex align-items-center justify-content-start'>

          <Link href="/dashboard" className="navbar-brand">
            <Logo />
            <h4 className="logo-title">{props.app_name}</h4>
          </Link>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={minisidebar}
          >
            <i className="icon">
              <svg
                width="20"
                className="icon-20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.25 12.2744L19.25 12.2744"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </i>
          </div>
        </div>
        <div className="sidebar-body pt-0 data-scrollbar" id="my-scrollbar">
          <Sidebarprofilecard />
          <hr className="hr-horizontal" />
          <div className="sidebar-list">
            <Adminvarticalnav />
          </div>
        </div>
        <div className="sidebar-footer"></div>
      </aside>
    </Fragment>
  )
})

Adminsidebar.displayName = "Adminsidebar"
export default Adminsidebar
