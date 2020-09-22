import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.scss';

import Header from './components/header/'
import Home from './pages/home/'
import Users from './pages/users/'

function App() {
	return (
        <div className="app">
            <Header />
			<Switch>
                <Route path="/" component={Home} exact />
                <Route path="/users" component={Users} />
            </Switch>
		</div>
	);
}

export default App;
