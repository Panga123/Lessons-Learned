import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) { //construction function
    super(props);
    this.state = { //assign component's initial state
       todos: [ //assign (state) object with todos property
         { description: 'Walk the cat', isCompleted: true },
         { description: 'Throw the dishes away', isCompleted: false },
         { description: 'Buy new dishes', isCompleted: false }
       ] // each object is a to do with properties description and completed
     }; // basically,  the to-dos  are stored in this.state.todos as an array of objects.
  }


  render() {
    return (
      <div className="App">
      <ul>
      // loop through list of to do items and create a ToDo component for each
      { this.state.todos.map( (todo, index) =>
        <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
      )}
       </ul>
      </div>
    );
  }
}
export default App;
