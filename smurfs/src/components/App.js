import React, { Component, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import SmurfDisplay from './SmurfDisplay';

class App extends Component {
  useEffect((props) => {
    props.getSmurf();
  }, [])

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfDisplay />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

const mapDispatchToProps = {
  getSmurf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
