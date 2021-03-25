import React from 'react'

import styled from 'styled-components'

import useTodos from './useTodos'

import AddTask from './features/todos/container/AddTask';
import TaskList from './features/todos/container/TaskList';

function App() {
	const { createTask, list, addTodos } = useTodos()

	return (
		<Wrapper>
			<TodosWrapper>
				<FilterWrapper>
					<AddTask onAddTodo={createTask} />
					<DropDownWrapper>
						<Select name="cars" id="cars">
							<option value="">All</option>
							<option value={true}>Completed</option>
							<option value={false}>Active</option>
						</Select>
					</DropDownWrapper>
				</FilterWrapper>
				<TaskList items={list} addTodos={addTodos} />
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
	margin-left:100px
	margin-top:13px
`

const Select = styled.select`
	height: 30px
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
