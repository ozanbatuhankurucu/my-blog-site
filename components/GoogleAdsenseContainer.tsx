import React, { useEffect } from 'react'

const GoogleAdsenseContainer = () => {
  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
      data-ad-slot='9883750649'
      data-ad-format='auto'
      data-full-width-responsive='true'></ins>
  )
}

export default GoogleAdsenseContainer
