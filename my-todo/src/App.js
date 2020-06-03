import React from 'react';
import ToDoList from './ToDoList/todolist';
import AddToDo from './AddTodo/addTodo';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos: []
    };
  }
  render(){
    return(<div>
          <h1 className="app-title">MY TODO LIST</h1>
          <AddToDo addTodoFn = {this.addTodo}></AddToDo>
          <ToDoList updateTodoFn = {this.updateTodo} todos = {this.state.todos}></ToDoList>
          </div>);
  }


componentDidMount = () => {
  const todos = localStorage.getItem('todos');
  if(todos){
    const savedTodos = JSON.parse(todos);
    this.setState({todos: savedTodos});
  }
  else{
    console.log('no todos');
  }
}

addTodo = async (todo) => {
  await this.setState({todos: [...this.state.todos,{
                                text: todo,
                                completed: false}]});
  localStorage.setItem('todos',JSON.stringify(this.state.todos));
  console.log(localStorage.getItem('todos'));
}

updateTodo = async (todo) => {
   const newTodos = this.state.todos.map(_todo => {
    if(todo === _todo)
      return {
        text: todo.text,
        completed : !todo.completed
      }
    else
      return _todo
  });
  await this.setState({todos: newTodos});
  localStorage.setItem('todos', JSON.stringify(this.state.todos));
}

}

export default App;