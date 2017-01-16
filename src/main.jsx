import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/App/App';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Index from './page/Index/Index';
import main from './main.css';
ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
        </Route>
    </Router>),
    document.body.appendChild(document.createElement('div'))
);