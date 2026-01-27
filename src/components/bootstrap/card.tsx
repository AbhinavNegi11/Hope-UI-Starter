import { ReactNode, memo } from 'react'

import CardHeader from './card-header'
import CardBody from './card-body'
import CardFooter from './card-footer'

interface Props {
    role?:any
    id?:any
    className?: string
    children?:any
}

const Card = memo((props:Props) =>
                <div className={`card ${props.className ? props.className : ''}`} >
                    {props.children}
                </div>
            )

Card.displayName = "Card"

export default Object.assign(Card, {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
  });