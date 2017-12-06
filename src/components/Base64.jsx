import React from 'react';
import InputBox from './InputBox.jsx';
import Output from './Output.jsx';
import copy from 'copy-to-clipboard';

export default class Base64 extends React.Component {
  constructor() {
    super();
    this.state = {
      result: []
    };
  }

  encodeInput = (string) => {
    const encodedResult = (new Buffer(string).toString('base64'));
    copy(encodedResult)
    this.setState({ result: [encodedResult] });
  };

  decodeInput = (string) => {
    const decodedResult = (new Buffer(string, 'base64').toString('ascii'));
    copy(decodedResult)
    this.setState({ result: [decodedResult] });
  };

  render() {
    return (
      <div className="my-container col-xlg-6 col-xlg-push-3 col-sm-8 col-sm-push-2 col-xsm-12">
        <h2>Base 64 Encoding and Decoding</h2>
        <hr/>
				<br/>
        <strong>Encode</strong>
        <InputBox placeholder="String To Encode..." submit={this.encodeInput} buttonText="Encode Base 64 String and Copy" rows={2} cols={50}/>
        <br/>
				<br/>
        <strong>Decode</strong>
        <InputBox placeholder="String To Decode..." submit={this.decodeInput} buttonText="Decode Base 64 String and Copy" rows={2} cols={50}/>
        <Output output={this.state.result}/>
      </div>
    );
  }
}
