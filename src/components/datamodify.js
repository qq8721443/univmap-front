import React from 'react';
import styled from 'styled-components';
import { Container, Input, Textarea, Button } from './common-style.js';

export function DataModifier() {
    return (
        <Container width='800px' height='500px'>
            <Input type='text' placeholder='항목 1' isMarBot={true}/>
            <Textarea placeholder='항목2' width='600px' height='400px' isMarBot={true}/>
            <Input type='text' placeholder='항목 3'/>
            <div style={{height: '40px'}}>
                <Button width='100px' height='40px' style={{float:"right"}}>저장</Button>
            </div>
        </Container>
    )
}