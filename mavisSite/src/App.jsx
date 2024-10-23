
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'

function App() {

  return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Contact">Contacts</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
  )
}

export default App
