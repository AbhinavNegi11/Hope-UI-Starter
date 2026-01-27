import {ReactNode, forwardRef} from 'react'
import Link from 'next/link';

interface Props{
  show?:any
  children?:ReactNode
  variant?:string
  onClick?:any
}

const CustomToggle = forwardRef((props:Props, ref:any) => (
    <Link
      href="#"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        props.onClick(e);
      }}
      className={props.variant}
      style={{color:'unset'}}
    >
      {props.children}
      
    </Link>
));

CustomToggle.displayName = "CustomToggle"
export default CustomToggle;