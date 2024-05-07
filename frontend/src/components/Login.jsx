import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import axios from 'axios'
import '../styles/Login.css'

function Login() {
  const [visible, setVisible] = useState(false)
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleSubmit = () => {
    axios
      .post('', { userName, userPassword })
      .then((result) => console.log(result))
      .catch((err) => console.log(err))
  }
  return (
    <div className="loginContainer">
      <div className="card flex justify-content-center">
        <Button
          label="Login"
          icon="pi pi-user"
          onClick={() => setVisible(true)}
        />
        <Dialog
          visible={visible}
          modal
          onHide={() => setVisible(false)}
          content={({ hide }) => (
            <div
              className="flex flex-column px-8 py-5 gap-4"
              style={{
                borderRadius: '12px',
                backgroundImage:
                  'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))',
              }}
            >
              <h1 style={{ textAlign: 'center', color: 'white' }}>Log in</h1>
              <div className="inline-flex flex-column gap-2">
                <label
                  htmlFor="username"
                  className="text-primary-50 font-semibold"
                >
                  Enter email
                </label>
                <InputText
                  id="username"
                  label="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="bg-white-alpha-20 border-none p-3 text-primary-50"
                ></InputText>
              </div>
              <div className="inline-flex flex-column gap-2">
                <label
                  htmlFor="username"
                  className="text-primary-50 font-semibold"
                >
                  Enter password
                </label>
                <InputText
                  id="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  label="Password"
                  className="bg-white-alpha-20 border-none p-3 text-primary-50"
                  type="password"
                ></InputText>
              </div>
              <div className="flex align-items-center gap-2">
                <Button
                  label="Submit"
                  onClick={handleSubmit}
                  text
                  className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
                ></Button>
                <Button
                  label="Cancel"
                  onClick={(e) => hide(e)}
                  text
                  className="p-3 w-full text-primary-100 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
                ></Button>
              </div>
            </div>
          )}
        ></Dialog>
      </div>
    </div>
  )
}

export default Login
