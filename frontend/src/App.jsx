import { useState } from 'react'

import api from './services/api'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import './App.css'

function App() {
  const [mode, setMode] = useState('login')
  const [notice, setNotice] = useState('')
  const showSignup = () => { setNotice(''); setMode('signup') }
  const showLogin = (message = '') => { setNotice(message); setMode('login') }

  
  return <main className="auth-page">
    <section className="brand-panel" aria-label="FactoryFlow introduction">
      <a className="brand" href="/" aria-label="FactoryFlow home"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span>FactoryFlow</span></a>
      <div className="brand-copy"><p className="eyebrow">PRODUCTION, SIMPLIFIED</p><h1>Keep your factory moving forward.</h1><p className="brand-description">Manage materials, production orders and inventory from one calm, clear workspace.</p></div>
      <div className="feature-list" aria-label="FactoryFlow benefits"><div><span className="check">✓</span>Real-time inventory visibility</div><div><span className="check">✓</span>Production tracking in one place</div><div><span className="check">✓</span>Built for your whole team</div></div>
    </section>
    <section className="form-panel"><div className="auth-card">{mode === 'login' ? <LoginForm onSignup={showSignup} notice={notice} /> : <SignupForm onLogin={showLogin} />}</div></section>
  </main>
}

export default App
