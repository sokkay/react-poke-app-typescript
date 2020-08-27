import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//esta declaracion es utilizada en typescript
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

//configuracion para utilizar devtools y multiples middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Encargado de realizar la combinacion de todos los reducer que
//se generar para administrar el estado de la app
const reducers = combineReducers({
});

//finalmente se crea el store
export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
