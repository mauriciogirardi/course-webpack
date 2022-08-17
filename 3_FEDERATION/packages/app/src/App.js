import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from './components/Navigation'

import './app.css'

export const App = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}
