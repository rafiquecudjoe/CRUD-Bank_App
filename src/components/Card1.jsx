import React from "react";
import { connect } from "react-redux";
import { Card, CardBody, Button } from "@windmill/react-ui";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";
import Modalform from "./Modalform";

const Card1 = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
    }
    
  
       
     
  

  return (
    <div style={{ display: "inline-grid" }}>
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
        <Button onClick={() => props.deleteuseraction(props.user)}>
          Delete
        </Button>

        <Button onClick={openModal}>Edit</Button>
      </div>

      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal} >
          <ModalHeader>Modal header</ModalHeader>
          <ModalBody>
            <Modalform user={props.user} />
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              layout="outline"
              onClick={closeModal}
            >
              Cancel
            </Button>
                 
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteuseraction: () =>
      dispatch({
        type: "DELETE_USER",
        payload: "value",
      }),
    reset: () => dispatch({ type: "RESET" }),
  };
};

export default connect(null, mapDispatchToProps)(Card1);
