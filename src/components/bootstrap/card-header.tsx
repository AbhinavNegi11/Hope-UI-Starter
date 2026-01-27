import { ReactNode, memo } from 'react'

import CardHeaderAction from './card-header-action'
import CardHeaderTitle from './card-header-title'

interface Props {
    className?: string
    children?: ReactNode
}

const Header = memo((props:Props) => 
                    <div className={`card-header d-flex justify-content-between ${props.className ? props.className : ''}`}> 
                        {props.children}
                    </div>)

Header.displayName = "Header"

export default Object.assign(Header, {
    Action: CardHeaderAction,
    Title: CardHeaderTitle,
  });