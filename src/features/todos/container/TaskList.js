import React, { useState } from 'react'

import styled from 'styled-components'

import TaskItem from '../component/TaskItem'

const TaskList = ({ items, addTodos }) => {

    const [expandId, setExpandId] = useState();

    const onClickExpand = (id) => {
        setExpandId(id);
    }

    const onClickShrink = () => {
        setExpandId();
    }

    return (
        <Wrapper>
            {items.map(item => {
                return <TaskItem key={item.id} addTodos={addTodos} expandId={expandId} onClickExpand={onClickExpand} onClickShrink={onClickShrink} {...item} />
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default TaskList