import React from 'react';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';

const menu = (handleEvent) => (
  <Menu>
    <Menu.Item>
      <Link rel="noopener noreferrer" to="/home/users/profile">
        Mi perfil
      </Link>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
				Contraseña
      </a>
    </Menu.Item>
    <Menu.Item>
      <a onClick={handleEvent}>
        Cerrar sesion
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownComponent = ({ children = null, handleEvent = null }) => {
    return (
			<Dropdown overlay={menu(handleEvent)}>
				<a className="ant-dropdown-link">
					{children}
				</a>
			</Dropdown>
  )
}

export default DropdownComponent;
