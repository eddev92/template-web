import React                           from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

import Navigation         from '../../layout/navigation';
import LandingView   from './views/landing.view';

const LandingRoute: React.FC<any> = ({location}) => {
    const {pathname} = location;

    return (
        <div>
            {/* <Header/> */}
            {/* {pathname !== '/home' && <Navigation/>} */}

            <Route component={LandingView} exact path={'/'}/>

            {/* <Route component={QueryView} exact path={'/home/query'}/> */}
            {/* <Footer /> */}
        </div>
    );
};

export default withRouter(LandingRoute);
