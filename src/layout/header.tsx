import React             from 'react';
import { connect }       from 'react-redux';
import { withRouter }    from 'react-router-dom';
// import { logout }        from '../main/auth/helpers';
import bannerImage       from '../assets/images/banner.jpg';
import DropdownComponent from '../shared/dropdown';
import { Avatar }        from 'antd';
import Navigation        from './navigation';

const Header: React.FC<any> = ({ user, location }) => {
    const { pathname } = location;

    return (
        <header className="globalNavbar">
            <div className={`${pathname === '/home' ? 'globalNavInitial' : 'globalNavPrimary'}`}>
                <div className="o-container o-container--fluid">
                    <ul className={`${pathname === '/home' ? 'globalNavActions' : 'globalNavActionsHead'}`}>
                        {pathname !== '/home' && <li className="globalNavUser">
                            <div className="globalNav__avatar u-p--lv0">
                                <a className="js-homeMenu" href="#modal-menuHome">
                                    <span>
                                        <img src={require('../assets/images/icons/market.png')} alt="market"/>
                                    </span>
                                </a>
                            </div>
                            <div className="globalNavUser__title u-ml--lv2">Tai Loy S.A</div>
                        </li>}
                        <li className="globalNavUser">
                            <div className="globalNavUser__title u-hd-tablet">
                                Hola {user.name}.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {pathname !== '/home' && <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}></div>}
        </header>
    );
};

export default withRouter(connect((state) => ({ user: state.auth.user }))(Header));
