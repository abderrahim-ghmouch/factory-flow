import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { clearSession, getStoredUser } from '../services/api'
import { logout } from '../services/auth'

function AdminLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const user = getStoredUser()


  const signOut = async () => {


    try { await logout() }
    catch { /* session is cleared locally either way */ }
    clearSession()
    navigate('/', { replace: true })
  }

  return <div className="admin-shell">
    <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} onLogout={signOut} />
    <div className="admin-main">
      <header className="admin-topbar">
        <button className="menu-button" type="button" aria-controls="admin-sidebar" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>Menu</button>
        <h1 className="topbar-title">Espace administrateur</h1>
        <div className="topbar-user"><span className="user-name">{user?.name || 'Administrateur'}</span><span className="user-role">ADMIN</span></div>
      </header>
      <main className="admin-content"><Outlet /></main>
    </div>
  </div>
}

export default AdminLayout