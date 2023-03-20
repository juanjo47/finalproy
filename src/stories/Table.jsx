import React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

function Table({ RowN, ColN, array}) {
  let n = -1
  var col = []
  let auxc = ColN
  let oficial, s=0
  if(array.length === auxc)
  {
      
      while(auxc > 0){
        auxc = auxc--
        s = s++
        console.log(array(s))
        oficial.concat('"name":array("s")') 
        return oficial 
      }
    
  }
  else {
    if (ColN > array.length)
    {
        return Error('insuficientes headers')
    }
    else{return Error('tiene demasiados headers') }
  }
  let auxr = RowN
  while(auxr > 0){
    auxr = auxr--
    n = n + 1
    col.concat(n)
    return col
  }
  
  return <DataTable
            columns={oficial} 
            data={col}
            />
}

Table.propTypes = {
  RowN: PropTypes.number,
  ColN:PropTypes.number,
  array: PropTypes.array,
}
Table.defaultProps = {
  RowN: 2,
  ColN: 3,
  array: ['Nº','1','2'],
  responsive: true,
  striped: true
};

export default Table