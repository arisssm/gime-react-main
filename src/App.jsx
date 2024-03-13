import  {Route, Routes} from 'react-router-dom'

// import pages
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import NewsPage from './pages/NewsPage'
import LoginPage from './pages/LoginPage'
import DetailPage from './pages/DetailPage'
import NewsDetail from './pages/NewsDetail'
import OrderPage from './pages/OrderPage'
import CartPage from './pages/CartPage'
import ConfirmPage from './pages/ConfirmPage'
import LibraryPage from './pages/LibraryPage'
import SalesPage from './pages/SalesPage'
import FreeGamePage from './pages/FreeGamePage'
import ScanPage from './pages/ScanPage'
import SignupPage from './pages/SignupPage'
import SuccessPage from './pages/SuccessPage'

function App() {
  return (
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/aboutpage' Component={AboutPage} />
        <Route path='/newspage' Component={NewsPage} />
        <Route path='/loginpage' Component={LoginPage} />
        <Route path='/detailpage/:id' Component={DetailPage} />
        <Route path='/newsdetail' Component={NewsDetail} />
        <Route path='/orderpage/:id' Component={OrderPage} />
        <Route path='/cartpage' Component={CartPage} />
        <Route path='/confirmpage/:id' Component={ConfirmPage} />
        <Route path='/librarypage/:id' Component={LibraryPage} />
        <Route path='/salespage' Component={SalesPage} />
        <Route path='/freegamepage' Component={FreeGamePage} />
        <Route path='/scanpage/:id' Component={ScanPage} />
        <Route path='/signuppage' Component={SignupPage} />
        <Route path='/successpage/:id' Component={SuccessPage} />
      </Routes>
  )
}

export default App;
