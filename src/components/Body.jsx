import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
<div className='flex mt-12 bg-black'> {/* mt-12 to account for fixed header */}
  <Sidebar />
  <div className='flex-1 ml-64  overflow-x-hidden'>
    <Outlet />
  </div>
</div>

  )
}

export default Body