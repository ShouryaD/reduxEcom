import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import {Outlet} from 'react-router-dom'
import Context from './Context/Context'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function App() {
  let {background} = useContext(Context)
  console.log(background)
  return (
    <div className={background?'transition-all 0.5s h-auto w-auto ease-in-out bg-black':'transition-all bg-white'}>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
