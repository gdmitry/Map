import { Route, Switch } from 'react-router-dom';
import React from "react";

import { AboutPage } from "./containers/AboutPage";
import { AuthPage } from "./containers/AuthPage";
import { MainPage } from "./containers/MainPage";

const Routers = () => (
    <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/auth' component={AuthPage} />
    </Switch>
)

export default Routers;