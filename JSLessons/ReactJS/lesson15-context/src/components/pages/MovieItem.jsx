import React from 'react'

const MovieItem = ({title,earn}) => {
  return (
    <div className="card col-12 col-sm-6 col-md-4">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{earn}</h6>
  </div>
</div>

  )
}

export default MovieItem