import './Table.styles.css'

import React, { FC, useState } from 'react'
import ClampLines from 'react-clamp-lines'
import Skeleton from 'react-loading-skeleton'
import BaseTable from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'

import InlineError from 'components/InlineError'

interface TableHeaderEnum {
  [key: string]: string
}

type DefaultProps = {
  pageSize: number,
  data: any[],
  noDataMsg: string
}

const defaultProps: DefaultProps = {
  pageSize: 10,
  data: [],
  noDataMsg: 'No data found'
}

type TableProps = {
  headers: TableHeaderEnum
  isLoading: boolean,
  columnWidths?: number[],
  pageSize?: number,
  error?: any,
  data?: any[],
  noDataMsg?: string
}

const Table: FC<TableProps> = baseProps => {
  const props = { ...defaultProps, ...baseProps }
  const [currentPage, setCurrentPage] = useState(1)
  const shouldRenderPagination = props.data.length > props.pageSize && !props.error
  const currentPageData = props.data.slice((currentPage - 1) * props.pageSize, currentPage * props.pageSize)

  return (
    <>
      <BaseTable striped bordered hover size='sm'>
        <thead>
          <tr>
            {Object.values(props.headers).map((header, i) => {
              const columnWidth = props.columnWidths?.[i]
                ? { width: `${(props.columnWidths?.[i] / 12) * 100}%` }
                : undefined

              return <th key={header} style={columnWidth}>{header}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {props.isLoading ? (
            <>
              {Array.from({ length: props.pageSize }).map((_, i) => (
                <tr key={i}>
                  {Object.keys(props.headers).map(headerKey => (
                    <td key={headerKey}>
                      <Skeleton />
                    </td>
                  ))}
                </tr>
              ))}
            </>
          ) : props.error ? (
            <tr>
              <td colSpan={Object.keys(props.headers).length}>
                <InlineError error={props.error} />
              </td>
            </tr>
          ) : !props.data.length ? (
            <tr>
              <td colSpan={Object.keys(props.headers).length}>
                <p className='m-0'>{props.noDataMsg}</p>
              </td>
            </tr>
          ) : (
            <>
              {currentPageData.map(dataRow => (
                <tr key={dataRow.id}>
                  {Object.keys(props.headers).map(headerKey => (
                    <td key={headerKey}>
                      <ClampLines
                        text={dataRow[headerKey]}
                        className='table--data-clamp'
                        lines={2}
                        id={`${dataRow.id}-${headerKey}`}
                        moreText='+'
                        lessText='-'
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </>
          )}
        </tbody>
      </BaseTable>
      {shouldRenderPagination && (
        <Pagination>
          {Array.from({ length: Math.ceil(props.data.length / props.pageSize) })
            .map((_, i) => {
              const pageNumber = i + 1

              return (
                <Pagination.Item
                  onClick={() => setCurrentPage(pageNumber)}
                  key={pageNumber}
                  active={currentPage === pageNumber}
                >
                  {pageNumber}
                </Pagination.Item>
              )
            })}
        </Pagination>
      )}
    </>
  )
}

export default Table
