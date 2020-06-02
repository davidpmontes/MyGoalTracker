import React from 'react';
import ToDoItems from '../ToDoItems/todoitems';

class ToDoList extends React.Component{
	render(){
		const {todos} = this.props;
		
		return(
			<div className = 'todoListContainer'>
			{
				todos.map((_todo,_index) => {
					return(
						<ToDoItems updateTodoFn ={this.updateTodo} key={_index} todo = {_todo}></ToDoItems>

						)
				})
			}
			</div>

		);
	}

updateTodo = (todo) => {
	this.props.updateTodoFn(todo);
}
}


export default ToDoList;
