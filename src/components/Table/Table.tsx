import React, { FC } from 'react'
import BaseTable from 'react-bootstrap/Table'

interface TableHeaderEnum {
  [key: string]: string
}

interface TableProps {
  isLoading: boolean,
  error?: any,
  data?: any[],
  headers: TableHeaderEnum
}

const Table: FC<TableProps> = props => {
  return (
    <BaseTable striped bordered hover size='sm'>
      <thead>
        <tr>
          {Object.values(props.headers).map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.isLoading ? (
          <p>Table is loading</p>
        ) : (
          <>
            {props?.data?.map(dataRow => (
              <tr key={dataRow.id}>
                {Object.keys(props.headers).map(headerKey => (
                  <td key={headerKey}>{dataRow[headerKey]}</td>
                ))}
              </tr>
            ))}
          </>
        )}
      </tbody>
    </BaseTable>
  )
}

export default Table
