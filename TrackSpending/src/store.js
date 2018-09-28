import {createStore ,combineReducers} from 'redux';
// import room from './reducer/room';
// import stickyNote from './reducer/stickyNote' ;
import breakfast from './reducers/breakfast';

let reducer = combineReducers({breakfast});
const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;