import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Card from '../../Components/Blogs/BlogPostCard.jsx'

function Blogs() {
  return (
      <div style={{backgroundColor: "#F5FBFF"}}>
      <Navbar />
            <h1 className='py-8 text-center text-3xl font-bold font-sans'>Nutritionist's Blogs</h1>
            <div className='flex flex-col gap-8'>
            <Card />
            </div>
            
        </div>
  )
}

export default Blogs