import React from 'react';
import { Component } from 'react';
import logo from './super-spooky-skeleton.jpg';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'feed Desmond',
        completed: false
      },
      {
        id: 2,
        title: 'chase Oji',
        completed: false
      },
      {
        id: 3,
        title: 'watch Vicky',
        completed: false
      },
    ]
  }

  render () {
    console.log(this.state.todos)
    console.log(this.props.todos)
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
            <Todos todos={this.state.todos}/>

          
      </div>
    );
  }
}

export default App;
