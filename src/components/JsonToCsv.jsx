import React from 'react';
const converter = require('json-2-csv');
const sampleData = require('../data/sample.json');

export default class JsonToCsv extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jsonData: sampleData,
      csvData: ""
    };
  }

  convertToCsv = () => {
    const inJson = JSON.parse(this.jsontext.value)
    let jsonToConvert;
    if (inJson.constructor === Array) {
      jsonToConvert = inJson;
    } else {
      const keys = Object.keys(inJson);
      if (keys.length === 1 && inJson[keys[0]].constructor !== Array) {
        jsonToConvert = [inJson]
      } else {
        jsonToConvert = inJson[keys[0]]
      }
    }
    var options = {
      CHECK_SCHEMA_DIFFERENCES: false

    };
    converter.json2csv(jsonToConvert.constructor === Array ? jsonToConvert : [jsonToConvert], (err, csv) => {
      if (!err) {
        return this.setState({ "sampleCsvData": csv, "jsonData": jsonToConvert });
      }
      throw err;
    }, options);

  };

  render() {
    const downURL = `data:text/csv;charset=utf-8,${encodeURIComponent(this.state.sampleCsvData)}`
    return (
      <div className="my-container col-xlg-6 col-xlg-push-3 col-sm-8 col-sm-push-2 col-xsm-12 form-group">
        <h3>JSON To CSV Converter</h3>
        <hr/>
        <strong style={{ fontSize: "large" }}>JSON To Convert</strong>
        <br/><br/>
        <textarea defaultValue={JSON.stringify(this.state.jsonData)} ref={(c) => this.jsontext = c} rows="6"/>
        <br/><br/>
        <button className="btn btn-primary" onClick={this.convertToCsv}>
          Convert To CSV
        </button>
        &nbsp;
        <a className="btn btn-primary" href={downURL}>
          Download CSV
        </a>
        <br/><br/><br/>
        <strong style={{ fontSize: "large" }}>CSV Data</strong>
        <br/><br/>
        <textarea value={this.state.sampleCsvData} rows="6" />
      </div>
    );
  }
}
