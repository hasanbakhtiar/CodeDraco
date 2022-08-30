import React, { Component } from 'react'
import { BrowserRouter,Route, Routes, Link } from 'react-router-dom'

class Nav extends Component {
  render(){
    return(
      <div className="d-flex mt-2">
        <Link className='mx-5' to="/">Home</Link>
        <Link className='mx-5' to="/about">About</Link>
        <Link className='mx-5' to="/contact">Contact</Link>
      </div>
    )
  }
}

class Home extends Component{
  render(){
    return(
      <h1>Home Page</h1>
    )
  }
}

class About extends Component{
  render(){
    return(
      <h1>About Page</h1>
    )
  }
}

class Contact extends Component{
  render(){
    return(
      <h1>Contact Page</h1>
    )
  }
}

class BasicRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default BasicRouter