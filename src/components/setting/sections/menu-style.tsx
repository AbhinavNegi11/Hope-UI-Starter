import {memo,Fragment}from 'react'
import CheckboxBtn from '../elements/checkbox-btn'
import Image from 'next/image'
interface Props{
    sidebarType:any

}
const MenuStyle = memo((props:Props) => {
    return (
        <Fragment>
            <h5 className="mt-4 mb-3">Menu Style</h5>
            <div className="d-grid gap-3 grid-cols-4 mb-4">
                <CheckboxBtn btnName="sidebar_type" className="text-center"  imgComponent={true} label="Mini"  labelclassName="overflow-hidden p-0" id="sidebar-mini" defaultChecked={props.sidebarType} value="sidebar-mini" >
                    <Image  src='/images/settings/dark/03.png' alt="mini" className="mode dark-img img-fluid" width="200" height="200" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-mini" loading="lazy" />
                    <Image  src='/images/settings/light/03.png' alt="mini" className="mode light-img img-fluid" width="200" height="200" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-mini" loading="lazy" />
                    
                </CheckboxBtn>
                <CheckboxBtn btnName="sidebar_type" className="text-center"  imgComponent={true} label="Hover"  labelclassName="overflow-hidden p-0" id="sidebar-hover" defaultChecked={props.sidebarType} value="sidebar-hover" >
                    <Image  src='/images/settings/dark/04.png' alt="hover" className="mode dark-img img-fluid" width="200" height="200" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-hover" loading="lazy" />
                    <Image  src='/images/settings/light/04.png' alt="hover" className="mode light-img img-fluid" width="200" height="200" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-hover" loading="lazy" />
                    
                </CheckboxBtn>
                <CheckboxBtn btnName="sidebar_type" className="text-center"  imgComponent={true} label="boxed"  labelclassName="overflow-hidden p-0" id="sidebar-boxed" defaultChecked={props.sidebarType} value="sidebar-boxed" >
                    <Image  src='/images/settings/dark/05.png' alt="boxed" className="mode dark-img img-fluid" width="200" height="200" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-boxed" loading="lazy" />
                    <Image  src='/images/settings/light/05.png' alt="boxed" className="mode light-img img-fluid" width="200" height="200" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-boxed" loading="lazy" />
                </CheckboxBtn>
                <CheckboxBtn btnName="sidebar_type" className="text-center"  imgComponent={true} label="Soft"  labelclassName="overflow-hidden p-0" id="sidebar-soft" defaultChecked={props.sidebarType} value="sidebar-soft" >
                    <Image  src='/images/settings/dark/05.png' alt="soft" className="mode dark-img img-fluid" width="200" height="200" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-soft" loading="lazy" />
                    <Image  src='/images/settings/light/05.png' alt="soft" className="mode light-img img-fluid" width="200" height="200" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-soft" loading="lazy" />
                </CheckboxBtn>
            </div>
        </Fragment>
    )
}
)

MenuStyle.displayName="MenuStyle"
export default MenuStyle