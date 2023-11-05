import React from 'react';
import ReactTable from 'react-table';

export default function UseTable(props) {debugger
  return (
    <ReactTable
      data={props.data}
      columns={props.columns}
      defaultPageSize={10}
      pageSizeOptions={[5, 10, 15]}
      emptyRowsWhenPaging={false}
    />
  )
}
