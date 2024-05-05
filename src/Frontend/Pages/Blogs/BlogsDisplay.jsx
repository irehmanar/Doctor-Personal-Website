import React from 'react'
import BlogNav from '../../Components/Blogs/BlogsNav.jsx'
import Posts from '../../Components/Blogs/Posts.jsx'

function Blogs() {
  return (
    <div>
      <div className="main-container" style={{backgroundColor: "aliceblue"}}>
            <BlogNav />
            <Posts />
        </div>
    </div>
  )
}

export default Blogs
