import { createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import api from './api';

let initialState = undefined;
const localStorageState = localStorage.getItem('store');

if (localStorageState) {
    initialState = JSON.parse(localStorageState);    
    
    if (initialState.token) {
        
        api.saveToken(initialState.token);
    }
}

const store = createStore(
    rootReducer,
    initialState,
    process.env.NODE_ENV === 'development' ?
    compose(
        applyMiddleware(thunk),
        // (window).__REDUX_DEVTOOLS_EXTENSION__ && (window).__REDUX_DEVTOOLS_EXTENSION__()
    ) :
    applyMiddleware(thunk)
);

export default store;