import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/global.scss'
import 'swiper/css'
import "swiper/css/navigation";
import "swiper/css/pagination";
// Hover CSS
import '../assets/custom/css/hover-min.css'
// import '../assets/landing-modules/scss/landing-pages.scss'

import AppLayout from "@/layouts/App";
import Default from "@/layouts/Default";
import LandingPage from "@/layouts/LandingPage";
import SSRProvider from 'react-bootstrap/SSRProvider';
import Blank from '@/layouts/blank';
import Accounting from '@/layouts/Accounting';
import Company from '@/layouts/Company';
import GeneralReports from '@/layouts/GeneralReports';
//store
import { Provider } from 'react-redux';
//reducer
import { wrapperStore } from '@/store'
import { SessionProvider } from "next-auth/react"
const layouts : any = {
  "Blank":Blank,
  "DEFAULT": Default,
  "LandingPage": LandingPage,
  "Accounting": Accounting,
  "Company": Company,
  "GeneralReports": GeneralReports,
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout: string
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, ...rest }: AppPropsWithLayout) {
  const layoutName = layouts[Component.layout] || layouts['DEFAULT']
  console.log(Component.layout)

  const Layout = layoutName || ((children: any) => <>{children}</>);
  const { store, props } = wrapperStore.useWrappedStore(rest);
  const { pageProps } = props;
  return (

    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {/* <SSRProvider> */}
          {/* <AppLayout> */}
            <Layout>
              <Component {...pageProps} />
            </Layout>
          {/* </AppLayout> */}
        {/* </SSRProvider> */}
      </Provider>
    </SessionProvider>
  )
}
