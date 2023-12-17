import  {Route, Routes} from 'react-router-dom'

// import pages
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import NewsPage from './pages/NewsPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/aboutpage' Component={AboutPage} />
        <Route path='/newspage' Component={NewsPage} />
        <Route path='/loginpage' Component={LoginPage} />
      </Routes>
  )
}

export default App
