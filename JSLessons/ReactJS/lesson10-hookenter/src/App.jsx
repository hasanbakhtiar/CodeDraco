// import React from 'react';

// class App extends React.Component {
//   state = {
//     loading: true
//   };

//   componentDidMount() {
//     this.fakeRequest().then(() => {
//       const el = document.querySelector(".loader-container");
//       if (el) {
//         el.remove();  // removing the spinner element
//         this.setState({ loading: false }); // showing the app
//       }
//     });
//   }

//   fakeRequest = () => {
//     return new Promise(resolve => setTimeout(() => resolve(), 2500));
//   };

//   render() {
//     if (this.state.loading) {
//       return null; //app is not ready (fake request is in process)
//     }

//     return (
//       <div className="App">
//         <h1>Hello React</h1>
     
//       </div>
//     );
//   }
// }

// export default App;






// import React, { Component, Fragment } from 'react'

// class App extends Component{

//     // componentDidMount(){
       
//     //     const myCount  = ()=>{
//     //         console.log('componentDidMount is running...');
//     //     }

//     //     setTimeout(myCount,2000);
//     // }


//     constructor(){
//         super();
//         console.log('constructor is running...');
//         this.state={
//             info:'Hello'
//         }
//     }

//     // componentDidUpdate(){
//     //     document.querySelector('h1').style.color='red';
//     //     console.log('update');
//     // }

//     actionText=()=>{
//         this.setState({
//             info:"bye"
//         })
//     }
    
    
   
   
//     render(){
//         return(
//             <div className="mt-5 container">
//             <h1>{this.state.info}</h1>
//             <button onClick={this.actionText}>action</button>
//             </div>
//         )
//     }
// }

// export default App


// import React from 'react';
// class ComponentOne extends React.Component {
 
//   // Defining the componentWillUnmount method
//   componentWillUnmount() {
//     alert('The component is going to be unmounted');
//   }
 
//   render() {
//     return <h1>Hello Geeks!</h1>;
//   }
// }
 
// class App extends React.Component {
//   state = { display: true };
//   delete = () => {
//     this.setState({ display: false });
//   };
 
//   render() {
//     let comp;
//     if (this.state.display) {
//       comp = <ComponentOne />;
//     }
//     return (
//       <div>
//         {comp}
//         <button onClick={this.delete}>
//           Delete the component
//         </button>
//       </div>
//     );
//   }
// }
 
// export default App;




// import React,{ useState,useEffect } from 'react'


// const App = () => {
//     const [text,setText] = useState('Hello');
//     useEffect(()=>{
//         console.log('useEffect is running...');
//         document.querySelector('span').classList.add('a');
//     })
//   return (
//     <div>
//         <button onClick={()=>{setText('bye')}}>+action</button>
//         <span >{text}</span>
//     </div>
//   )
// }

// export default App