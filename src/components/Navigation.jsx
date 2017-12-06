import React from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/jsonFormatter">Json Formatter</Link></li>
					<li><Link to="/csvToJson">Convert Csv To Json</Link></li>
					<li><Link to="/jsonToCsv">Convert Json To Csv</Link></li>
					<li><Link to="/uuidGenerator">Generate Uuid's</Link></li>
					<li><Link to="/base64">Encode and Decode Base64</Link></li>
					<li><Link to="/urlEncode">Encode and Decode URL</Link></li>
				</ul>
			</div>
		)
	}
}

