import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import RegisterProject from './pages/RegisterProject';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register-project" component={RegisterProject} />
        </Switch>
    </BrowserRouter>
);

export default Routes;