import React, { useState } from 'react'

import styled from 'styled-components'

const AddNewTodo = ({ addNewToDo }) => {

	// const [allTodos, setAllTodos] = useState(todos)

	const [todoData, setTodoData] = useState({
		name: '',
		status: 'Compelted'
	});

	const onClickSubmit = () => {
		addNewToDo(todoData);
	}

	return (
		<Wrapper>
			<code>
				<div>
					<>
						<MainWrapper>
							<Input
								type='text'
								placeholder='Add new todo...'
								onChange={(e) => setTodoData({ ...todoData, name: e.target.value })}
							/>
							<Select onChange={(e) => {
								setTodoData({ ...todoData, status: e.target.value })
							}}>
								<option value='Compelted'>Completed</option>
								<option value='Active'>Active</option>
							</Select>
							<Button onClick={() => onClickSubmit()}>
								Submit
                            </Button>
						</MainWrapper>
					</>
				</div>
			</code>
		</Wrapper >
	)
}

const Wrapper = styled.p`
  font-size: 24px;
  
`

const MainWrapper = styled.div`
display:flex
flex-direction:column
`

const Text = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  margin: 5px
`
const Plus = styled.span`
  margin-right: 20px;
`

const Minus = styled.span`
  margin-right: 20px;
`
const Input = styled.input`
  background: #3b4049;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 3px;
  font-size: 24px;
  height: 30px;
  width: 500px;
  margin-bottom: 16px;

  &::placeholder {
    color: #8d96a8;
  }
`

const Select = styled.select`
	height: 38px
	font-size:17px
	background: #3b4049
	color: white 
	`
const Button = styled.button`
 color:white
 font-size:17px
 width:100px
 margin-top:40px
 align-self:center
 background:#3b4049
 border-radius:3px
 `

export default AddNewTodo;