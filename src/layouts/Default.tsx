import React from "react";

// next route
import { useRouter } from 'next/router';

// components
import HeaderPro from '../components/pro/headerstyle/header-pro'

// sidebar
import Sidebar from '../components/dashboard/sidebarstyle/sidebar'

// footer
import Footer from '../components/dashboard/footerstyle/footer'

// seeting-offcanvas
import SeetingOffCanvas from '../components/setting/SettingOffCanvas'

// sub-header
import SubHeader from "@/components/dashboard/headerstyle/sub-header"

// Redux Selector / Action
import { useSelector } from 'react-redux';

// Import selectors & action from setting store
import * as SettingSelector from '../store/setting/selectors'
import { Button } from "react-bootstrap";

const Default = ({ children }: any) => {
    const appName = useSelector(SettingSelector.app_name)
    const pageLayout = useSelector(SettingSelector.page_layout)
    var subHeader = <></>;
  var commanclass = '';
  let location = useRouter();

    return(
     <>
        <Sidebar app_name={appName}/>
        <main className="main-content">
            <div className={`${commanclass} position-relative `}>
                <HeaderPro />
                {/* {subHeader} */}
            </div>
            <div className={` ${pageLayout} content-inner pb-0`}>
                {children}
            </div>
            <Footer />
        </main>
        <SeetingOffCanvas />
    </>
    )
};
export default Default;