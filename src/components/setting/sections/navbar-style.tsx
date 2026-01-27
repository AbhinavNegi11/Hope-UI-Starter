import {memo,Fragment}from 'react'

// next-image
import Image from 'next/image'

// component
import RadioBtn from '../elements/radio-btn'

// interface
interface Props{
    headerNavbar?: any
} 

const NavbarStyle = memo((props:Props) => {
    return (
        <Fragment>
            <h5 className="mt-4 mb-3">Navbar Style</h5>
            <div className="d-grid gap-3 grid-cols-4 mb-4">
                <RadioBtn btnName="header_navbar" imgComponent={true} label="Glass" className="text-center" labelclassName="p-0 overflow-hidden" id="nav-glass" defaultChecked={props.headerNavbar} value="nav-glass" >
                    <Image src='/images/settings/dark/10.png' width={100} height ={100} alt="image1" className={` mode dark-img img-fluid`}  loading="lazy" />
                    <Image src='/images/settings/light/10.png' width={100} height ={100} alt="image2" className={` mode light-img img-fluid`}  loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="header_navbar" imgComponent={true} label="Sticky" className="text-center" labelclassName="p-0 overflow-hidden" id="navs-sticky" defaultChecked={props.headerNavbar} value="navs-sticky" >
                    <Image src='/images/settings/dark/12.png' width={100} height ={100} alt="image1" className={` mode dark-img img-fluid`}  loading="lazy" />
                    <Image src='/images/settings/light/12.png' width={100} height ={100} alt="image2" className={` mode light-img img-fluid`}  loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="header_navbar" imgComponent={true} label="Transparent" className="text-center" labelclassName="p-0 overflow-hidden" id="navs-transparent" defaultChecked={props.headerNavbar} value="navs-transparent" >
                    <Image src='/images/settings/dark/12.png' width={100} height ={100} alt="image1" className={` mode dark-img img-fluid`}  loading="lazy" />
                    <Image src='/images/settings/light/12.png' width={100} height ={100} alt="image2" className={` mode light-img img-fluid`}  loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="header_navbar" imgComponent={true} label="Default" className="text-center" labelclassName="p-0 overflow-hidden" id="navs-default" defaultChecked={props.headerNavbar} value="navs-default" >
                    <Image src='/images/settings/dark/01.png' width={100} height ={100} alt="image1" className={` mode dark-img img-fluid`}  loading="lazy" />
                    <Image src='/images/settings/light/01.png' width={100} height ={100} alt="image2" className={` mode light-img img-fluid`}  loading="lazy" />
                </RadioBtn>
            </div>
        </Fragment>
    )
}
)

NavbarStyle.displayName="NavbarStyle"
export default NavbarStyle