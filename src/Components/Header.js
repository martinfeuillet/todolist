import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderStyled>
        <h1>To-Do-List</h1>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.div`
width: 100%;
height: 5rem;
color: #fff;
background: #248C9D;
display: flex;
align-items: center;
justify-content: center;

`