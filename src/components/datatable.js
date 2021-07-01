import React from 'react';
import styled from 'styled-components';
import {Button} from './common-style.js';

const TableContainer = styled.div`
    position: relative;
    width: 800px;
    height: 600px;
    margin: auto;
    margin-top: 50px;
    background-color: #f2f2f2;
`

const TableControl = styled.form`
    position: relative;
    width: 100%;
    height: 50px;
    background-color: grey;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 20px;
    gap: 10px;
`

const DesignedSelect = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    position: relative;
    width: 100px;
    height: 30px;
    cursor: pointer;
    border-radius: 5px;
    box-sizing: border-box;
    border: none;
    padding-left: 10px;
`

const DesignedInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
    border: none;
    padding-left: 10px;
`

const DesignedTable = styled.table`
    position: relative;
    margin-top: 10px;
    width: 100%;
`

const PaginateContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

const PaginateIndicator = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: #3786E3;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #2C6CB8;
        color: white;
    }
`

const TEMP_DATA = [
    {id: 1, name: 'test1', tel: '0000'},
    {id: 2, name: 'test2', tel: '1000'},
    {id: 3, name: 'test3', tel: '2000'},
    {id: 4, name: 'test4', tel: '3000'},
]

function TableMain({data}) {
    return (
        <DesignedTable>
            <thead>
            <tr>
                <th>항목 1</th>
                <th>항목 2</th>
                <th>항목 3</th>
            </tr>
            </thead>
            <tbody>
            {data.map(item => 
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.tel}</td>
                </tr>
            )}
            </tbody>
        </DesignedTable>
    )
}


function ControlBox() {
    return (
        <TableControl>
            <DesignedSelect>
                <option>건물 정보</option>
                <option>음식점 정보</option>
            </DesignedSelect>
            <DesignedInput placeholder='음식점, 건물 등 검색'/>
            <Button width='100px' height='30px' onClick={(e) => e.preventDefault()}>검색</Button>
        </TableControl>
    )
}

function TablePaginator() {
    return (
        <PaginateContainer>
            <PaginateIndicator>1</PaginateIndicator>
            <PaginateIndicator>2</PaginateIndicator>
            <PaginateIndicator>3</PaginateIndicator>
            <PaginateIndicator>4</PaginateIndicator>
        </PaginateContainer>
    )
}

export default function DataTable() {
    return (
        <TableContainer>
            <ControlBox/>
            <TableMain data={TEMP_DATA}/>
            <TablePaginator/>
        </TableContainer>
    )
}