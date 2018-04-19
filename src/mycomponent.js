import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

export default class MyComponent extends Component {

  constructor(props){
    super(props);
  }

  render(){

    return(

        <div>

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button name="asd" onClick={this.props.myclick}>click me</button>

          <div>
            <h1>{this.props.name}</h1>
            <h1>{this.props.age}</h1>
          </div>

        </div>

    );


  }

}

MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  myclick: PropTypes.func
}

MyComponent.defaultProps = {
  age: 1
};
