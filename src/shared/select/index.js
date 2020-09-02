import React from 'react';
import { Select } from 'antd';
import './../../styles/select.css';

const { Option } = Select;

const SelectComponent = ({ handleChange = null, id = '', options = [], classString = '', widthProp = '100%', name = '', value = '' }) => {
	const list = options && options.map((opt, key) => {
		return <Option value={opt.value} key={`opt-${key}`}>{opt.value}</Option>;
	})
    return (
        <Select className={classString} defaultValue="Selecciona" style={{ width: widthProp}} onChange={handleChange} id={id} value={value} >
					{list}
        </Select>
    	)
	}

export default SelectComponent;
