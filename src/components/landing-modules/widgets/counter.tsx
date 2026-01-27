import React,{Fragment,memo} from 'react'

interface counterProps{
  couterVlue?:any
  counterTitle?:any
  className?:string
}
const Counter = memo((props:counterProps) => {
  return (
    <Fragment>
        <h2 className={` ${props.className ? 'text-white' :'text-primary mb-3 counter '} `}>{props.couterVlue}</h2>
        <h6 className={`mb-0 ${props.className ? 'text-white' :'text-black'}`}>{props.counterTitle}</h6>
    </Fragment>
  )
})
Counter.displayName='Counter'
export default Counter