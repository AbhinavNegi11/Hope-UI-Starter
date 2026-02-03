import { memo, Fragment } from 'react'

//react-bootstrap
import { Container } from 'react-bootstrap'

//next-link
import Link from 'next/link';

// Import selectors & action from setting store
import * as SettingSelector from '../../../store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux';

// NExt Image
import Image from 'next/image';

const Autheffect = memo(() => {
    const appName = useSelector(SettingSelector.app_name)
    return (
        <Fragment>
            <nav className="navbar iq-auth-logo">
                <Container fluid>
                    <Link href="/dashboard" className="iq-link d-flex align-items-center">
                        <Image src='/images/favicon.ico' width={40} height={40} alt="logo" loading="lazy" />
                        <h4 data-setting="app_name" className="mb-0"> {`${appName}`}</h4>
                    </Link>
                </Container>
            </nav>
            <div className="iq-banner-logo d-none d-lg-block">
                <Image width={640} height={200} className="auth-image" src="/images/01.png" alt="logo-img" loading="lazy" />
            </div>
            <div className="container-inside">
                <div className="main-circle circle-small"></div>
                <div className="main-circle circle-medium"></div>
                <div className="main-circle circle-large"></div>
                <div className="main-circle circle-xlarge"></div>
                <div className="main-circle circle-xxlarge"></div>
            </div>
        </Fragment>
    )
})

Autheffect.displayName = "Autheffect"
export default Autheffect