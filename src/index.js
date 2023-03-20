import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataTable from 'react-data-table-component';

const root = ReactDOM.createRoot(document.getElementById('root'));
const column = [
  {
    name:'Title',
    selector: row => row.title,
  },
  {
    name:'Year',
    selector: row => row.year,
  }
]
const data = [
  {
    id: 1,
    title: 'bettle',
    year: '1223'
  },
  {
    id: 2,
    title: 'ghost',
    year: '1882'
  }
]
root.render(
  <div>
    <div style={{margin: 2 + 'em'}}>
    <React.StrictMode>
    <App />
      </React.StrictMode>
    </div>
    <div style={{margin: 2 + 'em'}}>
    <DataTable
      columns={column}
      data={data}
      striped = {true}
      />
      </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
