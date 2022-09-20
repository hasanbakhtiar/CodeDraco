import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import NotFoundPage from '../pages/NotFoundPage';
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <div className="container">
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/blogs" component={Blogs}></Route>
        <Route  component={NotFoundPage}></Route>

    </Switch>
    </div>
    
    </BrowserRouter>
  )
}

export default AppRouter