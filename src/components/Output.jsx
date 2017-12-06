import React from 'react';

export default class Output extends React.Component {
  static propTypes = {
    output: React.PropTypes.arrayOf(React.PropTypes.string)
  };

  generateOutput = () => this.props.output.map((x, i) => {
    return (<p key={i}> <strong>{x}</strong> </p>)
  });

  render() {
    return (
      <div>
				{ this.props.output && this.props.output.length > 0 &&<p>Output:</p>}
				{ this.props.output && this.props.output.length > 0 && this.generateOutput()}
				</div>
    )
  }
}
