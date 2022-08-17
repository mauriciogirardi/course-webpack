import React from 'react'
import { Button } from 'reactstrap'

import './home.css'

export const Home = () => {
  return (
    <div className="container home-content">
      <h1 className="display-3">Olá Module Federation</h1>
      <hr className="my-2" />
      <p>Este component é de outro App</p>
      <p className="lead">
        <Button color="primary">Click aqui</Button>
      </p>
    </div>
  )
}
