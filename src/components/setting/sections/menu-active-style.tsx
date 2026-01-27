import {memo,Fragment}from 'react'
import RadioBtn from '../elements/radio-btn'
import Image from 'next/image'

interface Props{
    sidebarMenuStyle:any
}
const MenuActiveStyle = memo((props:Props) => {
    return (
        <Fragment>
            <h5 className="mt-4 mb-3">Active Menu Style</h5>
            <div className="d-grid gap-3 grid-cols-3 mb-4">
                <RadioBtn btnName="sidebar_menu_style" imgComponent={true} label="Rounded One Side" className="text-center" labelclassName="p-0" id="navs-rounded" defaultChecked={props.sidebarMenuStyle} value="sidebar-default navs-rounded" >
                    <Image  src='/images/settings/dark/06.png' alt="rounded-one-side" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <Image  src='/images/settings/light/06.png' alt="rounded-one-side" className={` mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="sidebar_menu_style" imgComponent={true} label="Rounded All" className="text-center" labelclassName="p-0" id="navs-rounded-all" defaultChecked={props.sidebarMenuStyle} value="sidebar-default navs-rounded-all" >
                    <Image  src='/images/settings/dark/07.png' alt="pill-one-side" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <Image  src='/images/settings/light/07.png' alt="pill-one-side" className={`mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="sidebar_menu_style" imgComponent={true} label="Pill One Side" className="text-center" labelclassName="p-0" id="navs-pill" defaultChecked={props.sidebarMenuStyle} value="sidebar-default navs-pill" >
                    <Image  src='/images/settings/dark/08.png' alt="pill-one-side" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <Image  src='/images/settings/light/08.png' alt="pill-one-side" className={`mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="sidebar_menu_style" imgComponent={true} label="Pill All" className="text-center" labelclassName="p-0" id="navs-pill-all" defaultChecked={props.sidebarMenuStyle} value="sidebar-default navs-pill-all" >
                    <Image  src='/images/settings/dark/09.png' alt="pill-one-side" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <Image  src='/images/settings/light/09.png' alt="pill-one-side" className={`mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="sidebar_menu_style" imgComponent={true} label="Left Bordered" className="text-center" labelclassName="p-0" id="left-bordered" defaultChecked={props.sidebarMenuStyle} value="left-bordered" >
                    <Image  src='/images/settings/dark/05.png' alt="Left Bordered" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <Image  src='/images/settings/light/05.png' alt="Left Bordered" className={`mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="sidebar_menu_style" imgComponent={true} label="Full Width" className="text-center" labelclassName="p-0" id="navs-full-width" defaultChecked={props.sidebarMenuStyle} value="sidebar-default navs-full-width" >
                    <Image  src='/images/settings/dark/15.png' alt="Full Width" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <Image  src='/images/settings/light/15.png' alt="Full Width" className={`mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
            </div>
        </Fragment>
    )
}
)

MenuActiveStyle.displayName="MenuActiveStyle"
export default MenuActiveStyle