import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import tdd_articles from './tdd_articles.json'
import { COLUMNS } from './columns'
import './table.css'

export const BasicTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => tdd_articles, [])

    //hook
    const tableInstance = useTable({
        columns,
        data
    })

//table instance properties
const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    footerGroups,
    rows, 
    prepareRow 
} = tableInstance

    //table structure
    return(
        <table {...getTableProps()}>
            <thead> 
                {
                    headerGroups.map((headerGroup) => ( //Error fixed
                        <tr {...headerGroup.getHeaderGroupProps()}> 
                            {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}</tr>
                    ))
                }
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
                <tr>
                     <td></td>
                </tr>
            </tbody>
            <tfoot>
            { 
                footerGroups.map((footerGroup => (
                    <tr {...footerGroup.getFooterGroupProps()}>
                        {footerGroup.headers.map((column) => (
                            <td {...column.getFooterGroupProps}>{column.render('Footer')}</td>
                            ))}
                    </tr>
                )))
            }
            </tfoot>
        </table>
    )
}
                        