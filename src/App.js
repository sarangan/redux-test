import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux";
import MyComponent from "./mycomponent";
import ShallowRenderer from 'react-test-renderer/shallow';


import {fetchUser, setUserName} from "./actions/userActions";

class App extends Component {


   constructor() {
     super();
    this.state ={
      age : 1
    }

    this.onClick = this.onClick.bind(this);

   }



  componentWillMount(){

    const renderer = new ShallowRenderer();
    renderer.render(<MyComponent />);
    const result = renderer.getRenderOutput();
    //expect(result.type).toBe('div');

    console.log(result);


    console.log('asdasdsasss')
    this.props.fetchUser();


  }

  componentDidMount(){
    //ReactDOM.hydrate(MyComponent);

  }

  onClick(e){

    e.preventDefault();

    this.props.setUserName("sara");


  }


  render() {
    const {user} = this.props;

    return (
      <div className="App">

        <MyComponent myclick={this.onClick} name={this.props.user.name} age={this.props.user.age }/>


      </div>
    );
  }


}

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(mapStateToProps, {fetchUser, setUserName} )(App);
