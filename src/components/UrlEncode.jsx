import React from 'react';
import InputBox from './InputBox.jsx'
import Output from './Output.jsx'
import copy from 'copy-to-clipboard';

export default class UrlEncode extends React.Component {
  constructor() {
    super();
    this.state = {
      encodedOutput: 'Enter a string to decodeInput...',
      decodedOutput: 'Enter a string to encodeInput...',
      output: []
    };
  }

  encode = (string) => {
    const output = (encodeURIComponent(string));
    copy(output);
    this.setState({ result: [output] });
  };

  decode = (string) => {
    const output = (decodeURIComponent(string));
    copy(output);
    this.setState({result: [output] });
  };

  render() {
    return (
      <div className="my-container col-xlg-6 col-xlg-push-3 col-sm-8 col-sm-push-2 col-xsm-12">
        <h3>URL Encoding</h3>
        <hr/>
        <InputBox
          submit={this.encode}
          buttonText="Encode URL"
          rows={4}
        />
        <br/>
        <InputBox
          submit={this.decode}
          buttonText="Decode URL"
          rows={4}
        />
        <br/>
        <br/>
        <Output output={this.state.result}/>
      </div>
    );
  }
}
