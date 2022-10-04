import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieContext } from './context/MovieContext'

const Nav = () => {
    const [movies,setMovies] = useContext(MovieContext);
  return (
    <ul className="nav navbar-dark bg-dark">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Movie Logo</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="/">MovieList({movies.length})</Link>
  </li>

</ul>
  )
}

export default Nav