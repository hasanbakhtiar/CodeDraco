import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import MovieItem from './MovieItem';

const MovieList = () => {
    const [movies,setMovies] = useContext(MovieContext);
  return (
    <div className='row'>
        {movies.map(data=>(
            <MovieItem title={data.name} earn={data.price}/>
        ))}
    </div>
  )
}

export default MovieList