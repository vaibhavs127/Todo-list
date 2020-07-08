import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import Addtodo from './components/Addtodo/Addtodo';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';
import {v4 as uuid} from 'uuid'



class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

  // mark completed
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo from list
  delTodo = title => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${title}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.title !== title)]
      })
    );
  };

  // Add Todo
  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos/', {
        title:title,
        completed: false
      })
      .then(res => {
        res.data.id = uuid();
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Addtodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
