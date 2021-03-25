import React from 'react'

import styled from 'styled-components'

const DisplayTodo = ({ item }) => {

    return (
        <Wrapper>
            { item.name ?
                <><Text >{item.name}</Text><Status>{item.status}</Status><br /></>
                :
                <Text >{'No Todos'}</Text>
            }
        </Wrapper>
    )
}

const Text = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  margin: 5px
	border-radius:5px
`

const Status = styled.span`
 position:absolute
 right:37%
 color:green
 font-weight:bold
`

const Wrapper = styled.div`
background:#3b4049
border-radius:5px
padding:5px
margin-bottom:20px
`

export default DisplayTodo;