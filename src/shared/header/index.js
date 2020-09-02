import React from 'react';
import { Avatar } from 'antd';
import '../../../styles/header.css';

const HeaderComponent = () => {
    return (
        <div className="row main-header">
            <div className="col-10 adqr-section">
							<Avatar size="large" icon="user" />
							<h6>Banco Nacional de Costa Rica</h6>
						</div>
            <div className="col-2 user-section">
							<h6>Hola Pedro</h6>
							<Avatar size="large" icon="user" />
						</div>
        </div>
    )
}

export default HeaderComponent;

