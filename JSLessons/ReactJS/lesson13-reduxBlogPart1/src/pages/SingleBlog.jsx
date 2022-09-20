import React from 'react'

const SingleBlog = ({title,desc}) => {
  return (
    <div class="card col-12 col-sm-6 col-md-4" >
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{desc}</p>
    {/* <a href="#" class="btn btn-primary">Details</a> */}
  </div>
</div>
  )
}

export default SingleBlog