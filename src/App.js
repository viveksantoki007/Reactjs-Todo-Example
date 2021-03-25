import React, { useState } from 'react'

import styled from 'styled-components'

import useTodos from './useTodos'

import AddTask from './features/todos/container/AddTask';
import TaskList from './features/todos/container/TaskList';
import SelectStatus from './shared/component/select';

function App() {

	const { createTask, list, addTodos } = useTodos();
	const [todoList, setTodoList] = useState(list);

	const onChangeStatus = (value) => {
		if (value !== 'All') {
			const response = todoList.filter((item) => {
				if (item.todos.filter((item) => item.status === value).length > 0) {
					return {
						...item,
						todos: item.todos.filter((item) => item.status === value)
					};
				}
			});
			setTodoList(response);
		} else {
			setTodoList(list);
		}
	}

	return (
		<Wrapper>
			<TodosWrapper>
				<FilterWrapper>
					<AddTask onAddTodo={createTask} />
					<SelectStatus onChangeStatus={onChangeStatus} />
				</FilterWrapper>
				<TaskList items={todoList} addTodos={addTodos} />
			</TodosWrapper>
		</Wrapper>
	)
}

const FilterWrapper = styled.div`
  display:flex;
	`

const Wrapper = styled.div`
  background-color: #282c34;
  min-height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`
const DropDownWrapper = styled.div`
	margin-left:50px
	margin-top:13px
`

const Select = styled.select`
	height: 40px
	width: 200px
	background: #3b4049
	color: white 
	`
const TodosWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
	align-items: baseline;
	margin-bottom:400px
	margin-top:25px
  `

export default App
