import {createStore ,combineReducers} from 'redux';
// import room from './reducer/room';
// import stickyNote from './reducer/stickyNote' ;
import breakfast from './reducers/breakfast';
import lunch from './reducers/lunch';

let reducer = combineReducers({breakfast, lunch});
const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;