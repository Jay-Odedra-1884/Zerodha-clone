import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

function ProductPage() {
  return (
    <>
    <Hero />
    <LeftSection 
    imageUrl="public/media/images/kite.png"
    title="Kite"
    description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
    tryDemoLink="#"
    learnMoreLink="#"
    playStoreLink=""
    appStoreLink=""
    />
    <RightSection
    imageUrl="public/media/images/console.png"
    title="Console"
    description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
    learnMoreLink=""
    />
    <LeftSection 
    imageUrl="public/media/images/coin.png"
    title="Coin"
    description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
    playStoreLink=""
    appStoreLink=""
    link="#"
    linkTitle="Coin"
    />
    <RightSection
    imageUrl="public/media/images/console.png"
    title="Console"
    description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
    learnMoreLink=""
    />
    </>
  )
}

export default ProductPage
