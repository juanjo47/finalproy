import React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

function Table({ RowsN, ColN, array}) {
  let n = -1
  var col = []
  let auxc = ColN
  while(auxc > 0){
    auxc = auxc--
    if(array.length === auxc)
    {
      return array
    }
    else {
      if (ColN > array.length)
      {
          return Error('insuficientes headers')
      }
      else{return Error('tiene demasiados headers') }
    }
  }
  let auxr = RowsN
  while(auxr > 0){
    auxr = auxr--
    n = n + 1
    col.concat(n)
    return col
  }
  
  return <DataTable
            columns={array} 
            data={col}
            />
}

Table.propTypes = {
  RowsN: PropTypes.number,
  ColN:PropTypes.number,
  array: PropTypes.array,
}
Table.defaultProps = {
  RowsN: 1,
  ColN: 1,
  array: ['Nº'],
  responsive: true,
  striped: true
};

export default Table