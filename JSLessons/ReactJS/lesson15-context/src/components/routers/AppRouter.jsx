import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { MovieProvider } from '../context/MovieContext'
import Nav from '../Nav'
import MovieList from '../pages/MovieList'

const AppRouter = () => {
  return (
    <MovieProvider>
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={<MovieList/>}></Route>
        </Routes>
    </BrowserRouter>
    </MovieProvider>
  )
}

export default AppRouter