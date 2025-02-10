import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Login from './page/Login'
import Register from './page/Register'
import Profile from './page/Profile'
import UserList from './page/UserList'
import NavBar from './components/NavBar'
import OfferList from './page/OfferList'
import OfferForm from './page/OfferForm'
import OfferDetail from './page/OfferDetail'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='flex flex-col h-screen'>
        <NavBar />
        <Toaster position='top-center' reverseOrder={false}/>
        <div className='container mx-auto flex grow justify-center items-center'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/userList" element={<UserList/>}/>
          <Route path="/offers" element={<OfferList/>}/>
          <Route path="/offers/:id" element={<OfferDetail/>}/>
          <Route path="/offers/new" element={<OfferForm/>}/>
          <Route path="/offers/edit/:id" element={<OfferForm/>}/>
        </Routes>
        </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
