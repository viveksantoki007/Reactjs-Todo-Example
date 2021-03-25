import React from 'react'

import styled from 'styled-components'

function SelectStatus({ onChangeStatus }) {

    return (
        <>
            <DropDownWrapper>
                <Select name="cars" id="cars" onChange={(e) => onChangeStatus(e.target.value)}>
                    <option value={'All'}>All</option>
                    <option value={'Completed'}>Completed</option>
                    <option value={'Active'}>Active</option>
                </Select>
            </DropDownWrapper>
        </>
    )
}

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
export default SelectStatus;
