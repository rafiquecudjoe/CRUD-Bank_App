import React from "react";
import { connect } from "react-redux";

function NewnameComp(props) {
  return (
    <div>
      <h1>Name: {props.profile.name}</h1>
      <h1>Email:{props.profile.email}</h1>
      <h1>Name : {props.profile.name}</h1>
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProp)(NewnameComp);
