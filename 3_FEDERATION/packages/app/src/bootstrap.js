import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import { Routers } from './routers'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </React.StrictMode>
)
