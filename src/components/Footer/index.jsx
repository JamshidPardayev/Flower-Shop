import React from 'react'
import FooterContact from './FooterContact'
import FooterTop from './FooterTop'
import FooterInfo from './FooterInfo'
import '@fontsource/inter';

const Footer = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <FooterTop />
        <FooterContact/>
        <FooterInfo />
    </div>
  )
}

export default Footer