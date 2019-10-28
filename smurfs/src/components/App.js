import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import SmurfDisplay from './SmurfDisplay';
import { getSmurf } from '../actions/smurf';

function App(props) {

  useEffect(() => {
    props.getSmurf();
  }, [])

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      
    </div>
  );
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
