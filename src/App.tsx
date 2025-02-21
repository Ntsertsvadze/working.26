import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './pages/Header'
import Users from './pages/users'
import User from './pages/user'
import SpecialUser from './pages/SpecialUser'
import Error from './pages/Error'
import UserLayouts from './layouts/UserLayouts'
import FormPage, { action } from './pages/FormPage'
import HomeUser from './usersPages/HomeUser'
import ContactUser from './usersPages/ContactUser'
import Footer from './pages/Footer'

const App:React.FC = () => {
  return (
    <>
      <Header />
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/users'  element={<UserLayouts/>}>
          <Route index element={<Users/>}/>
          <Route path='special' element={<SpecialUser/>}/>
          <Route path=':id' element={<User/>}/>
        </Route>
        
        <Route path='/home-user' element={<HomeUser/>}/>
        <Route path='/contact-user' element={<ContactUser/>}/>


        <Route path='/form-page' element={<FormPage/>} action={action}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <hr />
      <Footer/>
    </>
  );
}

export default App;
