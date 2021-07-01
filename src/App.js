// import styled from 'styled-components';
import Header from './components/header.js';
import DataTable from './components/datatable.js';
import {DataModifier} from './components/datamodify.js';
import './App.css';

function App() {
  return (
    <div className='App' >
      <Header/>
      <DataTable/>
      <DataModifier/>
    </div>
  );
}

export default App;
