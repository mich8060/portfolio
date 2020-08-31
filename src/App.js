import React from 'react';
import './app.scss';

import About from './components/about/'
import Header from './components/header/'
import Intro from './components/intro/'
import Work from './components/work/'

function App() {
	return (
		<div className="app">
			<Header />
			<Intro />
			<About />
			<Work />
		</div>
	);
}

export default App;
