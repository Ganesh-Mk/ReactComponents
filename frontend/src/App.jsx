import { PrimeReactProvider } from 'primereact/api'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/SignUp'
import Navbar from './components/Navbar'

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  )
}

export default App
