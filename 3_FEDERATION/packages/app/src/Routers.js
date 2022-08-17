import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { App } from './App'

const HomePage = lazy(() => import('HomeApp/HomePage'))
const ContactPage = lazy(() => import('ContactApp/ContactPage'))

export const Routers = () => {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  )
}
