import { ReactNode, memo } from 'react'

interface Props {
    className?: string
    children?: ReactNode
}

const CardHeaderTitle = memo((props:Props) => 
                        <div className={`header-title ${props.className ? props.className : ''}`}> 
                            {props.children}
                        </div>
                    )

CardHeaderTitle.displayName = "CardHeaderTitle"
export default CardHeaderTitle;