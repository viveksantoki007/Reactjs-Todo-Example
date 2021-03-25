import React, { useState } from 'react'

import styled from 'styled-components'

import useTodos from './useTodos'

import AddTask from './features/todos/container/AddTask';
import TaskList from './features/todos/container/TaskList';
import SelectStatus from './shared/component/select';


function App() {
	const [todoList, setTodoList] = useState(list);
	const { list } = useTodos();
	let allTask = list
	const addTask = (item) => {
		const obj = {
			id: Math.floor(Math.random() * 1000),
			listName: item,
			todoList: []
		}
		allTask = [...todoList, obj];
		setTodoList([...todoList, obj])
	}

	const addTodos = (id, todos) => {
		const response = todoList.map(item => {
			if (item.id === id) {
				return {
					...item,
					todos: [...todos]
				}
			}
			return item
		})
		allTask = [...response];
		setTodoList(response)
	}

	const onChangeStatus = (value) => {
		if (value !== 'All') {
			let response = allTask.map((item) => {
				if (item.todos.filter((item) => item.status === value).length > 0) {
					return {
						...item,
						todos: item.todos.filter((item) => item.status === value)
					};
				}
			});
			response = response.filter(function (element) {
				return element !== undefined;
			});
			console.log(allTask);
			setTodoList(response);
		} else {
			setTodoList(allTask);
		}
	}

	return (
		<Wrapper>
			<TodosWrapper>
				<FilterWrapper>
					<AddTask onAddTodo={addTask} />
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

const TodosWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
	align-items: baseline;
	margin-bottom:400px
	margin-top:25px
  `

export default App
