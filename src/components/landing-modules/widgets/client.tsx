import React, {Fragment, memo } from 'react'
import Image from 'next/image'

interface clientProps{
  clientImage?:any
}
export const Client = memo((props:clientProps) => {
  return (
    <Fragment>
      <Image src={props.clientImage} alt="client-details"  loading="lazy"/>

    </Fragment>
  )
})
Client.displayName='Client'
export default Client
