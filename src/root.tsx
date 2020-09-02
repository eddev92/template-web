import React, { Suspense }                                  from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect }                                          from 'react-redux';

const HomeView = React.lazy(() => import('./main/home/home.route'));
const LoginView = React.lazy(() => import('./main/auth/auth.route'));
const LandingView = React.lazy(() => import('./main/landing/landing.route'));

const Root: React.FC<any> = ({  }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Switch>
                    <Route component={LandingView} exact path='/'/>
                    <Route component={LoginView} path='/login'/>
                    <Route component={HomeView} path='/home'/>
                </Switch>
            </Router>
        </Suspense>
    );
};

export default connect((state) => ({
}))(Root);
