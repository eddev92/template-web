import React                           from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

import HomeSelectorView   from './views/home-selector.view';

const HomeRoute: React.FC<any> = ({location}) => {

    return (
        <div>
            <Route component={HomeSelectorView} exact path={'/home'}/>

            {/* <Route component={QueryView} exact path={'/home/query'}/> */}
        </div>
    );
};

export default withRouter(HomeRoute);
