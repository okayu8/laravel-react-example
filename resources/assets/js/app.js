require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Main from './components/Main';
import Create from './components/Create';
import List from './components/List';
import Done from './components/Done';
import Edit from './components/Edit';
import Time from './components/Time';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Main} >
            <Route path="/create" component={Create} />
            <Route path="/list" component={List} />
            <Route path="/done" component={Done} />
            <Route path="/time" component={Time} />
            <Route path="/todos/:id/edit" component={Edit} />
        </Route>
    </Router>,
    document.getElementById('example'));