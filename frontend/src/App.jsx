import { PrimeReactProvider } from 'primereact/api'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Products from './components/Products'

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/projects" element={<Products />} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  )
}

export default App
