import { ReactNode, memo } from 'react'

interface Props {
    className?: string
    children?: ReactNode
}

const CardFooter = memo((props:Props) => 
                        <div className={`card-footer ${props.className}`}> 
                            {props.children}
                        </div>
                    )

CardFooter.displayName = "CardFooter"
export default CardFooter;