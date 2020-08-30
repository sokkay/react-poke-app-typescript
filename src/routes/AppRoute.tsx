import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { Sidebar } from '../components/shared/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getTypesOfPokemons } from '../actions/pokemons';

export const AppRoute = () => {
    const dispatch = useDispatch();
    const ui = useSelector((state: any) => state.ui);

    //carga los tipos de pokemon
    useEffect(() => {
        dispatch(getTypesOfPokemons());
    }, [dispatch]);

    if (ui.loading) {
        return <h1>Hola</h1>;
    }

    return (
        <Router>
            <div className='overflow-y-hidden w-screen h-screen flex flex-col'>
                <div className='flex flex-row h-full'>
                    <Sidebar />
                    <Switch>
                        <Route exact path='/' component={HomeScreen} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
