import React from 'react';
import { Table } from 'antd';
import './../../styles/table.css';

const TableComponent = ({ columns = [], data = [] }) => {

    return (
			<Table columns={columns} dataSource={data}  scroll={{ x: 920, y: 380 }} />

    )
}

export default TableComponent;
