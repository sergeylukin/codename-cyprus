import React from 'react'
import { Link, Router } from '@reach/router'

// components
import Home from './pages/Home'
import About from './pages/About'

export default () => (
  <div className="app-shell-component">
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  </div>
)
