// import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    position: relative;
    background-color: #3786E3;
    color: white;
    border-radius: 5px;
    width: ${props => props.width};
    height: ${props => props.height};
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #4092F3;
    }
`

export const Container = styled.div`
    position: relative;
    background-color: #f2f2f2;
    border-radius: 5px;
    width: ${props => props.width};
    
    margin: auto;
    margin-top: 20px;
    padding: 20px;
    box-sizing: border-box;
`

export const Input = styled.input`
    position: relative;
    display: block;
    outline: none;
    border: none;
    width: ${props => props.width};
    height: 30px;
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: ${props => props.isMarBot?'10px':'0px'};
`

export const Textarea = styled.textarea`
    resize: none;
    position: relative;
    display: block;
    width: ${props => props.width};
    height: ${props => props.height};
    border: none;
    outline: none;
    margin-bottom: ${props => props.isMarBot?'10px':'0px'};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    padding-left: 10px;
`