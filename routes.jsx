import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import App from './app';
import JsonFormatter from './components/JsonFormatter';
import CsvToJson from './components/CsvToJson';
import jsonToCsv from './components/JsonToCsv';
import UuidGenerator from './components/UuidGenerator';
import Base64 from './components/Base64';
import UrlEncode from './components/UrlEncode';
import 'styles/index.scss';

export default class Routes extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={App}/>
					<Route path="/jsonFormatter" component={JsonFormatter}/>
					<Route path="/csvToJson" component={CsvToJson}/>
					<Route path="/jsonToCsv" component={jsonToCsv}/>
					<Route path="/uuidGenerator" component={UuidGenerator}/>
					<Route path="/base64" component={Base64}/>
					<Route path="/urlEncode" component={UrlEncode}/>
				</div>
			</Router>
		)
	}
}
