import React from 'react'

import styled from 'styled-components'
import TodoList from './Todolist';

const TaskItem = ({ listName, onClickExpand, id, expandId, onClickShrink, todos, addTodos }) => (
    <Wrapper>
        <code>
            {expandId === id ?
                <Minus onClick={() => onClickShrink()}>-</Minus>
                :
                <Plus onClick={() => onClickExpand(id)}>+</Plus>
            }
            <Text >{listName}</Text>
            <>{expandId === id && <TodoList id={id} todos={todos} addTodos={addTodos} />}</>
        </code>
    </Wrapper>
)

const Wrapper = styled.p`
  font-size: 24px;
  cursor: pointer;
`

const Text = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`
const Plus = styled.span`
  margin-right: 20px;
`

const Minus = styled.span`
  margin-right: 20px;
`

export default TaskItem
