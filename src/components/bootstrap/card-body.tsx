import { ReactNode, memo } from 'react'

interface Props {
    className?: string
    children?: ReactNode
}

const CardBody =  memo((props:Props) => 
                        <div className={`card-body ${props.className ? props.className : ''}`}> 
                            {props.children}
                        </div>
                    )

CardBody.displayName = "CardBody"
export default CardBody;