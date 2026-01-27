import React,{useEffect} from "react";

// Header
import Header1 from '@/components/landing-modules/partials/header/header-1'
import Header2 from '@/components/landing-modules/partials/header/header-2'
import { Button } from 'react-bootstrap'
// Footer
import Footer from "@/components/landing-modules/partials/footer/footer";
import Footer1 from "@/components/landing-modules/partials/footer/footer-1";

// Import selectors & action from setting store
import * as SettingSelector from "@/store/setting/selectors";
// Redux Selector / Action
import { useSelector } from 'react-redux';
// Router
import { useRouter } from 'next/router'
const Layout = (({ children,app_name}: any) => {
 
    //location
    let location =  useRouter();

  const appName = useSelector(SettingSelector.app_name)
  useEffect(() => {
    document.body.classList.add("landing-pages");
    return () => {
      document.body.classList.remove("landing-pages");
    };
  });
return (
  <>
  <main className="main-content">
      <div className="position-relative">
        {/* <Header1 /> */}
        {location.pathname === '/landing-pages' ? <Header2 appName={appName} /> : <Header1 appName={appName}/>}
      </div>
      <div>
          {children}
      </div>
  </main>
  {/* <Footer app_name={appName}/> */}
  {location.pathname === '/landing-pages/software-landing-page' ? <Footer1 appName={appName}/> : <Footer appName={appName}/>}
  <div className="btn-fixed-end btn-primary btn-landing">
        <Button variant="primary px-3 d-flex" href="/" target="_blank">
          Dashboard Demo
        </Button>
      </div>
      {/* {{!-- Back-To-Top --}} */}
      <div id="back-to-top" style={{ display: "none" }}>
        <Button size="sm" variant="primary  p-0 position-fixed top" href="#top">
          <svg
            width="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15.5L12 8.5L19 15.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Button>
      </div>
      {/* {{!-- Back-To-end --}} */}
    </>
  )
})

export default Layout