import React, { Component } from 'react';
import { TodoList, TaskInput, SearchPanel, FilterButtonsGroup } from './components';

class Main extends Component {
  state = {
    todos: [
      { name: 'Todo 1', important: false, done: false, id: "kjhfd" },
      { name: 'Todo 2', important: true, done: false, id: "32jhg" },
      { name: 'Todo 3', important: false, done: false, id: "f89ref" },
      { name: 'Todo 4', important: false, done: false, id: "90fj3" },
      { name: 'Todo 5', important: false, done: false, id: "chv90" }
    ]
  };

  changeImportant = id => {
    this.setState(({ todos }) => {
      const tempTodos = todos.slice();
      const indexOfChangingEl = tempTodos.findIndex(e => e.id === id);
      tempTodos[indexOfChangingEl].important = !tempTodos[indexOfChangingEl].important;
      return { todos: tempTodos };
    });
  };

  changeStatus = id => {
    this.setState(({ todos }) => {
      const tempTodos = todos.slice();
      const indexOfChangingEl = tempTodos.findIndex(e => e.id === id);
      tempTodos[indexOfChangingEl].done = !tempTodos[indexOfChangingEl].done;
      return { todos: tempTodos };
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <nav className="level">
                <TaskInput />
              </nav>
            </div>
          </div>
        </section>
        <section className="section has-background-light todo-list">
          <div className="container">
            <TodoList todos={todos} changeImportant={this.changeImportant} changeStatus={this.changeStatus}/>
          </div>
        </section>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <SearchPanel />
                  </div>
                </div>
                <div className="level-right">
                  <FilterButtonsGroup />
                </div>
              </nav>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Main;
