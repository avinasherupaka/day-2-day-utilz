import React from 'react';
import JsonTable from 'react-json-table';
import copy from "copy-to-clipboard";
import CodeMirror from 'react-codemirror';

const flatten = require('flat');
const _ = require('lodash');

require('codemirror/mode/javascript/javascript');
require('codemirror/addon/display/placeholder');

export default class JsonFormatter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  convertToCsv = () => {
    try {
      const jsonToConvert = JSON.parse(JSON.stringify(this.state.input));
			copy(JSON.stringify(jsonToConvert));
      this.setState({"error": null, "input": jsonToConvert});
    } catch (err) {
      console.log(err.message);
      this.setState({"error": err.message, "input": null});
    }
  };

  flattenJSON = () => {
    try {
      const jsonToConvert = JSON.parse(JSON.stringify(this.state.input));
      if (_.isArray(jsonToConvert)) {
        const result = jsonToConvert.map(x => flatten(x));
        this.setState({"error": null, "input": result});
        copy(JSON.stringify(result));
      } else {
        const result = flatten(jsonToConvert);
        this.setState({"error": null, "input": result});
        copy(JSON.stringify(result));
      }
    } catch (err) {
      console.log(err.message);
      this.setState({"error": err.message, "input": null});
    }
  };

  updateInput = (newInput) => {
    if(newInput) {
      this.setState({
        input: JSON.parse(newInput)
      });
    }else{
      this.setState({
        input: ''
      });
    }
  };

  render() {

    const options = {
      theme: 'default',
      height: 'auto',
      viewportMargin: Infinity,
      mode: {
        name: 'javascript',
        json: true,
        statementIndent: 2,
      },
      lineNumbers: true,
      lineWrapping: true,
      indentWithTabs: false,
      placeholder:'Enter data you want to validate/format',
      tabSize: 2
    };

    let optionsReadOnly = _.cloneDeep(options);
    optionsReadOnly.readOnly = true;
    return (
      <div className="my-container col-xlg-6 col-xlg-push-3 col-sm-8 col-sm-push-2 col-xsm-12">
        <h3>Format JSON</h3>
        <hr/>
        <CodeMirror
          className="prettify"
          name="schemaCodeMirror"
          onChange={this.updateInput}
          value={this.state.input? JSON.stringify(this.state.input):''}
          options={options}
        />
        <br/><br/>
        <button className="btn btn-primary" onClick={this.convertToCsv}>
          Format JSON & Copy
        </button>
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-primary" onClick={this.flattenJSON}>
          Flatten JSON & Copy
        </button>
        &nbsp;
        <br/><br/>
        {this.state.input &&
        <div>
          <a className="btn btn-primary"
             href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.state.input, null, 2))}`}
             download="data.json">
            Download JSON
          </a>
          <br/><br/>
          <label>JSON Data:</label>
          <span className="prettify">
              <CodeMirror
                className="prettify"
                value={this.state.input? JSON.stringify(this.state.input, null, 2):''}
                options={options}
              />
        </span>
        </div>
        }
        {this.state.error &&
        <div>
          <label>JSON Error:</label><br/>
          <span className="error">
            {this.state.error}
          </span>
        </div>
        }
        {this.state.input && <JsonTable rows={this.state.input}></JsonTable>}
      </div>
    );
  }
}
