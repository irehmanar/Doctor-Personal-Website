import React from 'react'

function BlogPostCard() {
  return (
    <div>
 <div className="card w-[50%] bg-base-100 shadow-xl p-8 rounded-xl" style={{backgroundColor: "#E5F3FD"}}>
  <figure><img src="https://img.freepik.com/free-vector/fitness-nutrition-social-media-cover-template_23-2149717274.jpg?w=1380&t=st=1714754226~exp=1714754826~hmac=cb4834d0827d1d9e668c1f36e8c91daf3b3f474bb25652e96148917b6bc470ff" alt="BlogPostCard" /></figure>
  <div className="card-body">
    <h2 className="card-title">Improve Your Health!</h2>
    <p>Krle Improve!</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div>
    </div>
   
  )
}

export default BlogPostCard
