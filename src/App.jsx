import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <div className='w-full bg-[#000] '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
      <div className='min-h-[50vh]  w-full px-[20px] py-[2rem] md:p-[4rem]'>
       <Footer/>
      </div>
    </div>
  )
}

export default App