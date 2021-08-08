import './App.css';
import Header from './component/header/header.js';
import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component{

  componentDidMount() {}

  render() {
    return (
      <div id="App">
      
        <Header />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(
  mapStateToProps,
  {  }
)(App);

