import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #3786E3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 20px;
    box-sizing: border-box;
`

const HeaderLogo = styled.div`
    width: 25px;
    height: 25px;
    border: 5px solid #F00000;
`

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo/>
        </HeaderContainer>
    )
}