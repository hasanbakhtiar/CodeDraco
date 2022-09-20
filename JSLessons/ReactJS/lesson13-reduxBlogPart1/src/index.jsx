import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { addBlog,editBlog,removeBlog } from "./actions/blogAction";
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
const store  = configureStore();








// Dispatch Start
store.subscribe(()=>{
  console.log(store.getState());
})
const blog1 =  store.dispatch(addBlog({title:"Hello1",desc:"new value1"}))
const blog2 =  store.dispatch(addBlog({title:"Hello2",desc:"new value2"}))
console.log(blog1.blog.id);
store.dispatch(removeBlog(({id:blog1.blog.id})));
store.dispatch(editBlog(blog2.blog.id,{title:"update"}))
store.dispatch(addBlog({title:"Hello2",desc:"new value2"}))


// Dispatch End




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
