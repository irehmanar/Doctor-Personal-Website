import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogPostCard() {
  return (
    <div>
 <div className="card w-[50%] bg-base-100 shadow-xl p-8 rounded-xl" style={{backgroundColor: "#E5F3FD"}}>
  <figure><img src="https://www.baptisthealth.com/-/media/images/migrated/blog-images/teaser-images/kale-salad-1280x960.jpg?rev=4304868605894bfaa194e97424e60e04" alt="BlogPostCard" /></figure>
  <div className="card-body">
    <h2 className="card-title">HEALTH BENEFITS OF LEAFY GREENS</h2>
    <p>Leafy greens are an essential part of a healthy diet. They provide many important vitamins and minerals that help...</p>
    <div className="card-actions justify-end">
      <NavLink to={'/blog'}>
        <button className="btn btn-primary">Read More</button>
      </NavLink>
      
    </div>
  </div>
</div>
    </div>
   
  )
}

export default BlogPostCard
