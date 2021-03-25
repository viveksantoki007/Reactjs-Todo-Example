import React from 'react'

import styled from 'styled-components'

const DisplayTodo = ({ item }) => {

    return (
        <>
            { item.name ?
                <><Text >{item.name}</Text><Text >{item.status}</Text><br /></>
                :
                <Text >{'No Todos'}</Text>
            }
        </>
    )
}

const Text = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  margin: 5px
`
export default DisplayTodo;