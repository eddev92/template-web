import React from 'react';
import { Link } from 'react-router-dom';
import './../../../styles/sidenav.css';

const SideNav = () => {
    return (
        <div className="main-side-nav col-3">
					<ul>
						<li className="sidenav-option">
							<Link to="/home/transactions" className="link">Consultas</Link>
						</li>
						<li className="sidenav-option">							
							<Link to="/home/merchants" className="link">Comercios</Link>
						</li>
						<li className="sidenav-option">Usuarios</li>
						<li className="sidenav-option">Estadisticas</li>
						<li className="sidenav-option">Mas info</li>
						<li className="alignet-logo">
							<img src="../images/logo-inverse@1x.png" />
						</li>
					</ul>

				</div>
    )
}

export default SideNav;
