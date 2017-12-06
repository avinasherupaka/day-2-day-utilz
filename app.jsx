import React from 'react';
import Navigation from './components/Navigation';
import 'normalize.css';
import 'styles/index.scss';

export default class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<div>
					<h1>Welcome to day-to-day-util</h1>
				</div>
				<Navigation/>
			</div>
		)
	}
}
