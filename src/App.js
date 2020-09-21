
// CLASSESSS

// import React, { Component } from 'react';

// class App extends Component {

//   state = {
//     counter: 0,
//     title: 'wathever',
//     data: ''
//   }

//   increase = () => (
//     this.setState({
//       counter: this.state.counter + 1
//     })
//   )

//   decrease = () => (
//     this.setState({
//       counter: this.state.counter - 1
//     })
//   )

//   componentDidMount() {
//     fetch('https://api.github.com/users/marcllopis')
//       .then(response => response.json())
//       .then(data => this.setState({
//         data
//       }))
//   }

//   render() {
//     return (
//       <div>
//         <h1>Wild Counter with a Class {this.state.title}</h1>
//         <h3>Counter: {this.state.counter}</h3>
//         <button onClick={this.increase}> + </button>
//         <button onClick={this.decrease}> - </button>
//         <br />
//       <p>{this.state.data.name}</p>
//       </div>
//     );
//   }
// }




// HOOOOOKS


import React, { useState, useEffect } from 'react'
import { initialState } from './initialState'


function App() {

  let [state, setState] = useState(initialState)
  let [apiData, setApi] = useState('')


  const increase = () => setState({ ...state, counter: state.counter + 1 })

  const decrease = () => {
    if (state.counter <= 0) { state.counter = 1 }
    setState({ ...state, counter: state.counter - 1 })
  }

  const titleChange = () => {
    let newTitle = state.title.toUpperCase()
    setState({ ...state, title: newTitle })
  }

  const reset = () => setState(initialState)

  useEffect(() => {
    fetch('https://swapi.dev/api/people/1')
      .then(response => response.json())
      .then(data => setApi(data))
  }, [])

  return (
    <div>
      <h1>Wild Counter with a Class {state.title}</h1>
      <h3>Counter: {state.counter}</h3>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
      <button onClick={titleChange}>Change title</button>
      <button onClick={reset}>Reset</button>
      <br />
      <p>{apiData.name}</p>
    </div>
  );
}

export default App;

