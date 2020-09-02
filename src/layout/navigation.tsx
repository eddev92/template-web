import React, { useEffect }    from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navigation: React.FC<any> = ({location}) => {
    const {pathname} = location;

    return (
        <nav className="globalNavSecondary">
            <div className="media__icon u-hd-tablet">
                <a href="/" className="js-openMenu"><span></span></a>
            </div>
            <ul className="globalNavActions">
                <li className={`globalNav__item ${pathname === '/home/query' ? 'active' : ''}`}>
                    <NavLink to="/home/query">
                            <span>
                                <svg>
                                  <use xlinkHref="#query"></use>
                                </svg>
                            </span>
                        <p>Consultas</p>
                    </NavLink>
                </li>
                <li className={`globalNav__item ${pathname.includes('/home/merchant') ? 'active' : ''}`}>
                    <NavLink to="/home/merchant">
                            <span>
                                <svg>
                                  <use xlinkHref="#market-primary"></use>
                                </svg>
                            </span>
                        <p>Comercios</p>
                    </NavLink>
                </li>
                <li className={`globalNav__item ${pathname === '/home/users' ? 'active' : ''}`}>
                    <NavLink to="/home/users">
                            <span>
                                <svg>
                                  <use xlinkHref="#user-primary"></use>
                                </svg>
                            </span>
                        <p>Usuarios</p>
                    </NavLink>
                </li>
                <li className={`globalNav__item ${pathname.includes('/home/stats') ? 'active' : ''}`}>
                    <NavLink to="/home/stats">
                            <span>
                                <svg>
                                  <use xlinkHref="#statistics"></use>
                                </svg>
                            </span>
                        <p>Estadísticas</p>
                    </NavLink>
                </li>
              <li className={`globalNav__item ${pathname.includes('/home/info') ? 'active' : ''}`}>
                    <NavLink to="/home/info">
                            <span>
                                <svg>
                                  <use xlinkHref="#info"></use>
                                </svg>
                            </span>
                        <p>Más info</p>
                    </NavLink>
                </li>
                <li className="globalNav__item u-hd-tablet-wide">
                    <div className="brandBottom">
                        <img src={require('../assets/images/logo-inverse@1x.png')} alt=""/>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default withRouter(Navigation);
