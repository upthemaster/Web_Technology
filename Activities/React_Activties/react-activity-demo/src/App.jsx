import React from 'react'
import ComponentTypes from './components/ComponentTypes'
import PropsDemo from './components/PropsDemo'
import StateDemo from './components/StateDemo'
import HooksDemo from './components/HooksDemo'
import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>React Learning Activities</h1>
        <p>Implementing core React concepts: Components, Props, State, and Hooks</p>
      </header>

      <main>
        <section className="activity-card">
          <ComponentTypes />
        </section>

        <section className="activity-card">
          <PropsDemo />
        </section>

        <section className="activity-card">
          <StateDemo />
        </section>

        <section className="activity-card">
          <HooksDemo />
        </section>
      </main>

      <footer>
        <p>&copy; 2026 React Learning Module</p>
      </footer>
    </div>
  )
}

export default App