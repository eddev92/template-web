import React     from 'react';
import { Input } from 'antd';
import './../../styles/input.css';

const InputComponent = ({
                            maxlength = 20,
                            pattern = '',
                            placeholder = '',
                            handleChange = null,
                            type = 'text',
                            classString = '',
                            icon = null,
                            id = '',
                            width = '',
                            height = '',
                            textAlign = '',
                            name = '',
                            value = '',
                            disabled = false
                        }) => {
    return (
        <Input
            style={{ width, height, textAlign }}
            type={type}
            id={id}
            className={`input-secure-key ${classString}`}
            placeholder={placeholder}
            onChange={handleChange ? handleChange.bind(this) : null}
            name={name}
            value={value}
            disabled={disabled}
            pattern={pattern}
            maxLength={maxlength}
        />
    );
};

export default InputComponent;
