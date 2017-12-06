import React from 'react';

export default class InputBox extends React.Component{
  static propTypes = {
    rows: React.PropTypes.number.isRequired,
    placeholder: React.PropTypes.string,
    submit: React.PropTypes.func.isRequired
  };

  constructor(){
    super();
    this.input = null;
  }

  submit = (e) => {
    e.preventDefault();
    this.props.submit(this.input.value)
  };

  render = () => {
    return(
      <form>
        <textarea placeholder={this.props.placeholder} ref={ (c) => { this.input=c; } } rows={this.props.rows.toString()}/>
        <br/>
        <button className="btn btn-primary" type="submit" onClick={this.submit} >
          <i className="fa fa-clipboard"> &nbsp;</i> {this.props.buttonText}
        </button>
      </form>
    )
  }
}
