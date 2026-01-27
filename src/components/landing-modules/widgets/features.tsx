import React, { Fragment,memo} from 'react'
import  Link  from 'next/link'

interface featureProps{
    featurTitle?:String
    featurText?:String   
}

const FeatureWidget = memo((props:featureProps) => {
  return (
    <Fragment>
        <h6 className="mb-4">{props.featurTitle}</h6>
        <p className="mb-4">{props.featurText}</p>
        <Link href="#">Know More</Link>
    </Fragment>
  )
})
FeatureWidget.displayName = "FeatureWidget"
export default FeatureWidget
