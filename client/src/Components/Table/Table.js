import React from 'react'
import { Table as TableMain } from 'antd'
import columns from '../../Helper/TableColumns'
import { reformedData } from '../../Helper/HelperFuntions'

function Table(props) {
    
    const handleDeleteAction = (val)=>{
        props.setOpenModal(true)
        props.setEditFormData(val)
    }
    const handleEditAction = (val)=>{
        props.setEditForm(true)
        props.setEditFormData(val)
    }
    
    const tableColumns = columns(handleEditAction,handleDeleteAction)
  return (
    <>
        <TableMain dataSource={reformedData(props.data)} columns={tableColumns}/>
        
    </>
  )
}

export default Table
