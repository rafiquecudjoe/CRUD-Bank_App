import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { windmill } from "@windmill/react-ui";

// const SETACCOUNTNAMEACTION = { type: "", payload: "" };

export const SETPROFILEDATAACTION = (value) => ({
  type: "SET_ACCOUNT_DATA",
  payload: value,
});


export const updateuseraction = (value) => ({
  type: "UPDATE_USER",
  payload: value,
});



export const deleteuseraction = (value) => ({
  type: "DELETE_USER",
  payload: value,
});

const ProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ACCOUNT_DATA":
      return { ...state, profile: [...state.profile, action.payload] };

    case "DELETE_USER":
      return {
        ...state,
        profile: state.profile.filter((profile, index) => profile.name !== action.payload.name),
      };
    case "UPDATE_USER" :
      return {
        ...state,
        profile: state.profile.map((profile, index) => profile.name !== action.payload.name)

      }
    default:
      return state;
  }
};

const Store = createStore(ProfileReducer, {
  profile: [],
});

ReactDOM.render(
  <React.StrictMode>
    <windmill>
      <Provider store={Store}>
        <App />
      </Provider>
    </windmill>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
