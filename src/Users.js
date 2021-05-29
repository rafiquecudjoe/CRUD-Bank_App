import React from "react";
import { connect } from "react-redux";

function Users(props) {
  return (
    <div>
      <div>
        <h1>Bank Account List</h1>
        {
          props.banks.map((bank) => {
            return <Card user={bank} />;
          }) // [{ }]
        }
      </div>
      <button style={{ marginRight: "20px" }}>Edit</button>

      <button>Delete</button>
    </div>
  );
}

const Card = (props) => {
  return (
    <div>
      <p>Name of Bank: {props.user.nameOfBank}</p>
      <p>Bank Location: {props.user.bankLocation}</p>
      <p>Account Type: {props.user.accountType}</p>
      <p>Account Name: {props.user.accountName}</p>
      <p>Account Number: {props.user.accountNumber}</p>
      <p>Account Balance: {props.user.accountBalance}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    banks: state.profile,
  };
};

export default connect(mapStateToProps)(Users);
