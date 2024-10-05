import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Error404 from './pages/Error404'
import Wishlist from './pages/Wishlist/Wishlist'
import Cart from './pages/Cart/Cart'
import Login from './pages/User/Login'
import Signup from './pages/User/Signup'
import Account from './pages/User/Account'
import UserDetails from './pages/User/UserDetails'
import Order from './pages/User/Order'
import OrderTracking from './pages/User/OrderTracking'
import Address from './pages/User/Address'
import AccountDetails from './pages/User/AccountDetails'
import Logout from './pages/User/Logout'


function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>

      <Route path='/account' element={<Account/>}>
        <Route index element={<UserDetails/>}/>
        <Route path='order' element={<Order/>}/>
        <Route path='ordertracking' element={<OrderTracking/>}/>
        <Route path='address' element={<Address/>}/>
        <Route path='accountdetails' element={<AccountDetails/>}/>
        <Route path='logout' element={<Logout/>}/>
      </Route>

      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>



      {/* <Route path='*' element={<Error404/>}/> */}
     </Routes>
    </>
  )
}

export default App
