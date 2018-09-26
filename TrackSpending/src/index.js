import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import TrackSpendingRecord from './components/TrackSpendingRecord';
import registerServiceWorker from './registerServiceWorker';

// import { Provider } from 'react-redux'
// import store from './store'
// import { Switch } from 'react-router';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

{/* <Provider store={store}>
    <Router >
        <Switch>
            <Route exact path="/" component={TrackSpendingRecord} />
            // {/* <Route path="/Game" component={Game} />
        </Switch>
    </Router> 
</Provider>, document.getElementById('root')*/}

// ReactDOM.render(
ReactDOM.render(<TrackSpendingRecord />, document.getElementById('root'));
// );
registerServiceWorker();
