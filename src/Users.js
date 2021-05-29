import React from "react";
import { connect } from "react-redux";
import {Input,Card,CardBody,Button} from "@windmill/react-ui"

function Users(props) {
  return (
    <div style={{display:"flex"}}>
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

const Card1 = (props) => {
  return (
    <div>

   
    <div>

 
    <Card colored className="bg-purple-600">
  <CardBody>
    <p className="mb-4 font-semibold text-white">Account Details</p>
    <p className="text-white">
    <p>Name of Bank: {props.user.nameOfBank}</p>
      <p>Bank Location: {props.user.bankLocation}</p>
      <p>Account Type: {props.user.accountType}</p>
      <p>Account Name: {props.user.accountName}</p>
      <p>Account Number: {props.user.accountNumber}</p>
      <p>Account Balance: {props.user.accountBalance}</p>

    
    </p>
  </CardBody>
    </Card>
    </div>
    <div>
      <Button>Delete</Button>
      
      <Button>Edit</Button>

      </div>
      </div>
   
    

   
  );
};

const mapStateToProps = (state) => {
  return {
    banks: state.profile,
  };
};

export default connect(mapStateToProps)(Users);
