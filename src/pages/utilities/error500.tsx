import {memo,Fragment} from 'react'

//react-bootstrap
import {Container} from 'react-bootstrap'

//next-link
import Link  from 'next/link'
import Image  from 'next/image'
 

// img
import error500 from '../../../public/images/error/500.png'

 const Error500 = () => {
    return (
        <Fragment>
            <div className="gradient">
                <Container>
                    <Image src={error500} className="img-fluid mb-4 w-50" alt=""/>
                    <h2 className="mb-0 mt-4 text-white">Oops! This Page is Not Found.</h2>
                    <p className="mt-2 text-white">The requested page dose not exist.</p>
                    <Link className="btn btn-light text-primary d-inline-flex align-items-center" href="/dashboard">Back to Home</Link>
                </Container>
                <div className="box">
                    <div className="c xl-circle">
                        <div className="c lg-circle">
                            <div className="c md-circle">
                                <div className="c sm-circle">
                                    <div className="c xs-circle">                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


Error500.layout="Blank";
export default Error500;
