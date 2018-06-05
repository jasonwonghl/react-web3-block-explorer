import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';

const App = () => (
	<div>
		<header>
			<Link to="/">Home</Link>
			<Link to="/about-us">About</Link>
		</header>

		<main>
			<Router exact path="/" component={Home} />
			<Router exact path="/about-us" component {About} />
		</main>
	</div>
)