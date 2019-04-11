import React, { Component } from 'react';
import { TodoList, TaskInput, SearchPanel, FilterButtonsGroup } from './components';

const returnHash = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2, 6) +
    Math.random()
      .toString(36)
      .substring(2, 3)
  );
};

const myTodoStorage = localStorage;

class Main extends Component {
  state = {
    todos: myTodoStorage.todos ? JSON.parse(myTodoStorage.todos) : [],
    currentTodoText: '',
    validTaskName: true,
    currentFilter: 'all',
    search: /./gi
  };

  componentDidUpdate() {
    myTodoStorage.todos = JSON.stringify(this.state.todos);
  }

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
      return { currentFilter: filterName };
    });
  };

  filteredTodos = todos => {
    let tempTodos;
    switch (this.state.currentFilter) {
      case 'all': {
        tempTodos = todos;
        break;
      }
      case 'todo': {
        tempTodos = todos.filter(el => el.done === false);
        break;
      }
      case 'important': {
        tempTodos = tempTodos = todos.filter(el => el.important === true);

        break;
      }
      case 'done': {
        tempTodos = todos.filter(el => el.done === true);
        break;
      }
      default: {
        tempTodos = todos;
      }
    }

    return tempTodos.filter(el => el.name.search(this.state.search) >= 0);
  };

  addTaskHandle = e => {
    e.preventDefault();
    if (this.state.currentTodoText.length > 1) {
      this.setState(({ currentTodoText, todos }) => {
        return {
          todos: [
            ...todos,
            { name: currentTodoText, important: false, done: false, id: returnHash() }
          ],
          currentTodoText: '',
          validTaskName: true
        };
      });
    } else {
      this.setState(({ validTaskName }) => {
        return {
          validTaskName: false
        };
      });
    }
  };

  onTaskInputChange = text => {
    this.setState(({ currentTodoText, validTaskName }) => {
      return {
        currentTodoText: text,
        validTaskName: true
      };
    });
  };

  onSearch = event => {
    this.setState({
      search: event.target.value ? new RegExp(event.target.value, 'gi') : /.*/gi
    });
  };

  render() {
    const { todos, validTaskName, search } = this.state;
    return (
      <>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <nav className="level">
                <TaskInput
                  addTaskHandle={this.addTaskHandle}
                  currentTodoText={this.state.currentTodoText}
                  onTaskInputChange={this.onTaskInputChange}
                />
              </nav>
              {!validTaskName && (
                <p className="help is-danger">You can't add task with name less than 2 symbols</p>
              )}
            </div>
          </div>
        </section>
        <section className="section has-background-light todo-list">
          <div className="container">
            <TodoList
              search={search}
              todos={this.filteredTodos(todos)}
              changeImportant={this.changeImportant}
              changeStatus={this.changeStatus}
              deleteTodo={this.deleteTodo}
            />
          </div>
        </section>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <SearchPanel onSearch={this.onSearch} />
                  </div>
                </div>
                <div className="level-right">
                  <FilterButtonsGroup
                    todos={todos}
                    changeCurrentFilter={this.changeCurrentFilter}
                  />
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
