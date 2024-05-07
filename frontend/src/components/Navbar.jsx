import React from 'react'
import { Menubar } from 'primereact/menubar'
import { InputText } from 'primereact/inputtext'
import { Badge } from 'primereact/badge'
import { Avatar } from 'primereact/avatar'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import '../styles/Button.css'
import Login from './Login'

function Navbar() {
  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  )
  const items = [
    {
      label: (
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          Home
        </Link>
      ),
      icon: 'pi pi-home',
    },
    {
      label: (
        <Link
          to="/features"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          Features
        </Link>
      ),
      icon: 'pi pi-star',
    },
    {
      label: (
        <Link
          to="/projects"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          Projects
        </Link>
      ),
      icon: 'pi pi-search',
    },
  ]

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  )
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
      />
      {/* <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      /> */}
      <SignUp />
      <Login />
    </div>
  )
  return (
    <div>
      <div className="card">
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  )
}

export default Navbar
