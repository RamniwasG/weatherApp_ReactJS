import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state={ msg: ' '}
    //To remove immutability of the value of text we are using a new approach here
    //bind this with onChange method at time of intial state
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm=this.onSubmitForm.bind(this);

  }

  onInputChange(event){
    this.setState({msg: event.target.value});
  }

  onSubmitForm(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.msg);

  }

  render(){
    return (
        <form onSubmit={this.onSubmitForm} className="input-group">
          <input className="form-control"
            onChange={this.onInputChange}
            value={this.state.msg}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-default" >Search</button>
          </span>
        </form>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather },dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
