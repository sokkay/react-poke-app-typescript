import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { Sidebar } from '../components/shared/Sidebar';

export const AppRoute = () => {
    return (
        <Router>
            <div className='flex flex-row overflow-hidden w-screen h-screen'>
                <Sidebar />
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                </Switch>
            </div>
        </Router>
    );
};
