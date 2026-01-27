import {ReactNode, memo} from 'react'
import { useDispatch } from 'react-redux'
import SettingAction from '../../../store/setting/actions'
 

interface Props{
    sidebarType?:any
    btnName: any
    className: any
    type?: string
    id: string | undefined
    labelclassName: any
    children?: ReactNode
    imgComponent?: any
    label: string
    value:any
    defaultChecked:any
}
const CheckboxBtn = memo((props:Props) => {
    const dispatch = useDispatch();
    const checkboxCheckValue = (selector:any,value:any) => {
        if(selector.includes(value)) {
            return true
        }
        return false
    }

    const changeDispatch = (e:any) => {
        const value = props.value
        if(checkboxCheckValue(props.defaultChecked, props.value)) {
            dispatch(SettingAction[props.btnName as keyof typeof SettingAction]([...props.defaultChecked.filter((item: any) => item !== value)]))
        } else {
            dispatch(SettingAction[props.btnName as keyof typeof SettingAction]([...props.defaultChecked, value]))
        }
    }
    return (
        <div className={`${props.className}`}>
            <input type="checkbox" value={props.value} className={props.type === 'switch' ? 'form-check-input' : 'btn-check'} name={props.btnName} id={props.id} autoComplete="off" defaultChecked={checkboxCheckValue(props.defaultChecked, props.value)} onClick={changeDispatch} />
            <label className={`btn btn-border d-block ${props.labelclassName}`} htmlFor={props.id}>
                {props.children}
            </label>
            {props.imgComponent ? <span className="mt-2"> {props.label || ''} </span> : ''}
        </div>
    )
})

CheckboxBtn.displayName = 'CheckboxBtn'
export default CheckboxBtn