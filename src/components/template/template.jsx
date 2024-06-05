import React, {useState} from 'react'
import {Header} from './header/header'
import {Footer} from './footer/footer'

export const PageTemplate = ({children}) => {

  return (
    <div>
      <Header />
      {children}
      <Footer />
      
    </div>
  )
}