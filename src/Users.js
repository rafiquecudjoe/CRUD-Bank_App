import React from "react";
import { connect } from "react-redux";

import Card1 from "./components/Card1"

function Users(props) {

 
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Bank Account List</h1>
        {
          props.banks.map((bank) => {
            return <Card1 user={bank} />;
          }) // [{ }]
        }
      </div>
    </div>
  );
}




const mapStateToProps = (state) => {
  return {
    banks: state.profile,
  };
};


export default connect(mapStateToProps)(Users);
