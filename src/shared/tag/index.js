import React from 'react';
import { Tag } from 'antd';
import './../../styles/tag.css';

const TagComponent = ({ title = '', close = () => {}, index = '' }) => {
    return (
      <Tag closable onClose={close} className={`filter-${index}`}>
				{title}
    </Tag>
    )
}

export default TagComponent;
