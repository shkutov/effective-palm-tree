import React, { Component } from 'react';
import { TodoList, TaskInput, SearchPanel, FilterButtonsGroup } from './components';

const returnHash = () => {
  return Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 3);
};

class Main extends Component {
  state = {
    todos: [
      { name: 'Todo 1', important: false, done: false, id: 'kjhfd' },
      { name: 'Todo 2', important: true, done: false, id: '32jhg' },
      { name: 'Todo 3', important: false, done: false, id: 'f89ref' },
      { name: 'Todo 4', important: false, done: false, id: '90fj3' },
      { name: 'Todo 5', important: false, done: false, id: 'chv90' }
    ],
    currentTodoText: "",
    validTaskName: true,
    currentFilter: "all"
  };

  changeImportant = (e, id) => {
    e.stopPropagation();
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
  };

  deleteTodo = (e, id) => {
    e.stopPropagation();
    this.setState(({ todos }) => {
      const tempTodos = todos.slice();
      const indexOfChangingEl = tempTodos.findIndex(e => e.id === id);
      tempTodos.splice(indexOfChangingEl, 1);
      return { todos: tempTodos };
    });
  };

  changeCurrentFilter = filterName => {
    this.setState(({ currentFilter }) => {
      return {currentFilter: filterName}
    })
  };

  filteredTodos = todos => {
    let tempTodos;
    switch (this.state.currentFilter) {
      case "all": {
        tempTodos = todos;
        break;
      }
      case "todo": {
        tempTodos = todos.filter(el => el.done === false);
        break;
      }
      case "important": {
        tempTodos = tempTodos = todos.filter(el => el.important === true);

        break;
      }
      case "done": {
        tempTodos = todos.filter(el => el.done === true);
        break;
      }
      default: {
        tempTodos = todos;
      }
    }
    return tempTodos

  };

  addTaskHandle = (e) => {
    e.preventDefault();
    if (this.state.currentTodoText.length > 1) {
      this.setState(({ currentTodoText, todos }) => {
        return {
          todos: [...todos, { name: currentTodoText, important: false, done: false, id: returnHash() }],
          currentTodoText: "",
          validTaskName: true
        }
      })
    } else {
      this.setState(({ validTaskName }) => {
        return {
          validTaskName: false
        }
      })
    }
    
  }

  onTaskInputChange = (text) => {
    this.setState(({ currentTodoText, validTaskName }) => {
      return {
        currentTodoText: text,
        validTaskName: true
      }
    })
  }

  render() {
    const { todos, validTaskName } = this.state;
    return (
      <>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <nav className="level">
                <TaskInput addTaskHandle={this.addTaskHandle} currentTodoText={this.state.currentTodoText} onTaskInputChange={this.onTaskInputChange} />
              </nav>
              {!validTaskName && <p className="help is-danger">You can't add task with name less than 1 symbol</p>}
            </div>
          </div>
        </section>
        <section className="section has-background-light todo-list">
          <div className="container">
            <TodoList
              todos={todos}
              changeImportant={this.changeImportant}
              changeStatus={this.changeStatus}
              deleteTodo={this.deleteTodo}
              filteredTodos={this.filteredTodos}
            />
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
                  <FilterButtonsGroup todos={todos} changeCurrentFilter={this.changeCurrentFilter}/>
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
