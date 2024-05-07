import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Card from '../../Components/Blogs/BlogPostCard.jsx'

function Blogs() {
  return (
    <div>
      <div style={{backgroundColor: "#F5FBFF"}}>
            <Navbar />
            <h1 className='py-8 text-center text-3xl font-bold font-sans'>Read your Nutritionist's Blogs Here</h1>
            <div className='flex flex-col gap-8'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
            
        </div>
    </div>
  )
}

export default Blogs