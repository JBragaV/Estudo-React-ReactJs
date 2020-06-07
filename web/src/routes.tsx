import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import CreatePoint from './pages/create-point';

const Router = () =>{
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatePoint} path="/cadastro"/>
        </BrowserRouter>
    );
}


export default Router;