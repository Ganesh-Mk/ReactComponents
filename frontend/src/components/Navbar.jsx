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
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => window.location.assign('/'), // Redirect to home
    },
    {
      label: 'Features',
      icon: 'pi pi-star',
      command: () => window.location.assign('/features'), // Redirect to features
    },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      command: () => window.location.assign('/projects'), // Redirect to projects
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
