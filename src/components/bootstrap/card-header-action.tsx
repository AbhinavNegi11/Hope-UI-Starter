import { ReactNode, memo } from 'react'

interface Props {
    className?: string
    children?: ReactNode
}

const CardHeaderAction = memo((props:Props) => 
                        <div className={`header-action ${props.className ? props.className : ''}`}>
                            {props.children}
                        </div>
                    )

CardHeaderAction.displayName = "CardHeaderAction"
export default CardHeaderAction;