import React from 'react';
import Output from './Output.jsx'
import copy from 'copy-to-clipboard';
const uuidV4 = require('uuid/v4');

export default class UuidGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      input: 1,
      output: []
    }
  }

  validateCount = (e) => {
    const count = e.target.value;
    const input = Math.max(1, Math.min(count, 16));
    this.setState({ input: input });
  }

  generateIDs = (e) => {
    e.preventDefault();
    const count = this.state.input;
    console.log(count);
    let idArray = [];
    for (let i = 0; i < Number(count); i++) {
      idArray.push(uuidV4());
    }
    console.log(idArray);
    this.setState({ result: idArray });
    copy(idArray);
  }

  render() {
    return (
      <div className="my-container col-xlg-6 col-xlg-push-3 col-sm-8 col-sm-push-2 col-xsm-12">
        <h3> UUID Generator</h3>
        <hr/>
        <h4> Enter the number of IDs you need to generate (Max: 16)</h4>
        <h5>Your IDs will be copied automatically to the clipboard.</h5>
        <br/>
        <input value={this.state.input} onChange={this.validateCount} type="number"/>
        <br/><br/>
        <button className="btn btn-primary" type="submit" onClick={this.generateIDs}> Generate UUID List</button>
        <br/><br/>
        <Output output={this.state.result}/>
      </div>
    )
  }
}
