import React, { Component } from "react";
import Formcss from "./Form.module.css";
import { connect } from "react-redux";
import { SETPROFILEDATAACTION } from ".";

class Form1 extends Component {


 state = {
    nameOfBank: "",
    bankLocation: "",
   accountType: "",
   accountName: "",
   accountNumber: "",
   accountBalance: "",
   accountUpdate:""
  };

  render() {
   
    return (
      <div className={Formcss.main}>
        <form>
          <div>
            <label>Name of Bank</label>
            <input
              type="text"
              placeholder=""
              value={this.state.nameOfBank}
              onChange={(event) => {
                this.setState({ nameOfBank: event.target.value });
              }}
            />
          </div>
          <div>
            <label>Bank Location</label>
            <input
              type="text"
              placeholder=""
              value={this.state.bankLocation}
              onChange={(event) => {
                this.setState({  bankLocation: event.target.value });
              }}
            />
          </div>
          <div>
            <label>Account Type</label>
            <input
              type="text"
              placeholder=""
              value={this.state.accountType}
              onChange={(event) => {
                this.setState({ accountType: event.target.value });
              }}
            />
          </div>
          <div>
          <label>Account Name</label>
            <input
              type="text"
              placeholder=""
              value={this.state.accountName}
              onChange={(event) => {
                this.setState({ accountName: event.target.value });
              }}
            />

          </div>
          <div>
          <label>Account Number</label>
            <input
              type="text"
              placeholder=""
              value={this.state.accountNumber}
              onChange={(event) => {
                this.setState({ accountNumber: event.target.value });
              }}
            />

          </div>
          <div>
          <label> Acoount Balance</label>
            <input
              type="text"
              placeholder=""
              value={this.state.accountBalance}
              onChange={(event) => {
                this.setState({ accountBalance: event.target.value });
              }}
            />

          </div>
         
          <button
            onClick={(event) => {
              event.preventDefault();
              const {     nameOfBank,
              bankLocation,
             accountType,
             accountName,
             accountNumber,
             accountBalance} = this.state
              this.props.SET_PROFILE_DATA({  nameOfBank,
                bankLocation,
               accountType,
               accountName,
               accountNumber,
               accountBalance})
              this.setState({
                nameOfBank: "",
                bankLocation: "",
               accountType: "",
               accountName: "",
               accountNumber: "",
               accountBalance
              })
              
              
            }}

       
          >
            Submit
          </button>
        </form>
        
        <hr/>
        <form>
        <div>
            <label>Account Update</label>
            <input
              type="text"
              placeholder=""
              value={this.state.accountUpdate}
              onChange={(event) => {
                this.setState({ accountUpdate: event.target.value });
              }}
            />
          </div>
          <button>Update</button>
        </form>
      </div>
    );
  }
}


 const mapDispatchtoProps = (dispatch) => {
  return {
    SET_PROFILE_DATA: (value) => {
      dispatch(SETPROFILEDATAACTION(value))
    }
    
  }
}



export default connect(null,mapDispatchtoProps) (Form1)