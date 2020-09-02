import React from 'react';
import { Avatar } from 'antd';
import '../../../styles/card-adqr.css';

const CardAdquirencyComponent = ({ element = {}, classString = '', maxWidth = '', height = '', sizeAvatar = 68 }) => {
    return (
        <div className={`main-card-adquirency ${classString}`} style={{maxWidth, height}}>					
					<Avatar size={sizeAvatar} icon="user" />
					<div class="vertical-line" style={{height: '100px'}}/>
					<div className="adqr-info">
							<ul>
								<li>HOME</li>
								<li>ROL</li>
								<li>COUNTRY</li>
							</ul>
					</div>
				</div>
    )
}

export default CardAdquirencyComponent;
