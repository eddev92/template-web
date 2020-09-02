import React from 'react';
import { Button } from 'antd';
import './../../styles/button.css';

const ButtonComponent = ({ title = '', size = '', classString = "", handleClick, icon = null, shape = '', width = '', height = '', fontSize = '', left = '', attempsTotal = null, type = 'primary' }) => {
	if (attempsTotal) {
		return (
			<Button disabled={attempsTotal === 3} type={type} style={{width, height, fontSize, left}} shape={shape} size={size} icon={icon} className={`button-secure-key ${classString}`} onClick={handleClick}>
						{attempsTotal === 3 ? 'INHABILITADO POR REINTENTOS, ESPERE POR FAVOR...' : title}
				</Button>
		)
	}
	return (
    	<Button type={type} style={{width, height, fontSize, left}} shape={shape} size={size} icon={icon} className={`button-secure-key ${classString}`} onClick={handleClick}>
					{title}
			</Button>
    )
}

export default ButtonComponent;
