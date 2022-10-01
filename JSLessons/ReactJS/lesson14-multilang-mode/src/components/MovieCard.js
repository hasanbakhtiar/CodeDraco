import React from 'react'

const MovieCard = ({title,price}) => {
  return (
    <div className="card col-4" >
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{price}</p>
    <p className="btn btn-primary">Go somewhere</p>
  </div>
</div>
  )
}

export default MovieCard