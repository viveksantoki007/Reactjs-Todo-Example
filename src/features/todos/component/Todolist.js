import React, { useState } from 'react'

import styled from 'styled-components'
import AddNewTodo from '../../../shared/component/AddNewTodo';
import DisplayTodo from '../../../shared/component/DisplayTodo';

const TodoList = ({ id, todos, addTodos }) => {

    const [allTodos, setAllTodos] = useState(todos)

    const [addNewField, setAddNewField] = useState(false);

    const onClickAddTodo = () => {
        setAddNewField(true);
    }

    const onClickSubmit = (newTodo) => {
        const newTodos = [...allTodos, newTodo];
        setAllTodos(newTodos);
        addTodos(id, newTodos);
        setAddNewField(false);
    }

    return (
        <Wrapper>
            <code>
                <div>
                    {allTodos.length > 0 && allTodos.map((item) => {
                        return (
                            <DisplayTodo item={item} />
                        )
                    })}
                    {addNewField && (
                        <AddNewTodo
                            addNewToDo={(item) => onClickSubmit(item)}
                        />
                    )}
                    <Plus onClick={() => addNewField ? null : onClickAddTodo()}>+</Plus>
                </div>
            </code>
        </Wrapper >
    )
}

const Wrapper = styled.p`
  font-size: 24px;
  cursor: pointer;
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
  border-radius: 3px;
  padding: 10px 18px;
  font-size: 24px;
  height: 40px;
  width: 500px;
  margin-bottom: 16px;

  &::placeholder {
    color: #8d96a8;
  }
`

export default TodoList