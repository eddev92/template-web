import React                                                  from 'react';
import { RouteComponentProps }                                from 'react-router';
import { Route, withRouter } from 'react-router-dom';
import LoginNormalView from './views/login-normal';

const AuthRoute: React.FC<RouteComponentProps> = ({ history }) => {
    return (
        <div>
            <Route component={LoginNormalView} exact path={'/login'}/>
            {/* <Route component={LoginCodeView} exact path={'/login/code'}/> */}

        </div>
    );
};

export default withRouter(AuthRoute);
