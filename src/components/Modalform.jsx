import React, { Component } from 'react'
import {Label,Input,Button} from "@windmill/react-ui"

export default class Modalform extends Component {

    state = {
        nameOfBank: this.props.user.nameOfBank,
        bankLocation: this.props.user.bankLocation,
        accountType: this.props.user.accountType,
        accountName:this.props.user.accountName,
        accountNumber: this.props.user.accountNumber,
        accountBalance:this.props.user.accountBalance,
        accountUpdate:this.props.user.accountUpdate,
      };

    render() {



        const submit = (event) => {
            event.preventDefault();
            const {
              nameOfBank,
              bankLocation,
              accountType,
              accountName,
              accountNumber,
              accountBalance,
            } = this.state;
            this.props.SET_PROFILE_DATA({
              nameOfBank,
              bankLocation,
              accountType,
              accountName,
              accountNumber,
              accountBalance,
            });
           
            this.setState({
              nameOfBank: "",
              bankLocation: "",
              accountType: "",
              accountName: "",
              accountNumber: "",
              accountBalance: "",
            });
          };
      
        return (


            
                <form>
          <Label>
            <span>Name of Bank</span>
            <Input
              type="text"
              placeholder=""
              value={this.state.nameOfBank}
              onChange={(event) => {
                this.setState({ nameOfBank: event.target.value });
              }}
              valid
            />
          </Label>
          <Label>
            <span>Bank Location</span>
            <Input
              type="text"
              type="text"
              placeholder=""
              value={this.state.bankLocation}
              onChange={(event) => {
                this.setState({ bankLocation: event.target.value });
              }}
              valid
            />
          </Label>
          <Label>
            <span>Account Type</span>
            <Input
              type="text"
              value={this.state.accountType}
              onChange={(event) => {
                this.setState({ accountType: event.target.value });
              }}
              valid
            />
          </Label>

          <Label>
            <span>Account Name</span>
            <Input
              type="text"
              value={this.state.accountName}
              onChange={(event) => {
                this.setState({ accountName: event.target.value });
              }}
              valid
            />
          </Label>
          <Label>
            <span>Account Number</span>
            <Input
              type="text"
              placeholder=""
              value={this.state.accountNumber}
              onChange={(event) => {
                this.setState({ accountNumber: event.target.value });
              }}
              valid
            />
          </Label>
          <Label>
            <span> Account Balance</span>
            <Input
              type="text"
              placeholder=""
              value={this.state.accountBalance}
              onChange={(event) => {
                this.setState({ accountBalance: event.target.value });
              }}
              valid
            />
                </Label>
                <Button onClick={submit}>Submit</Button>

         
          
        </form>
                
        
        )
    }
}
