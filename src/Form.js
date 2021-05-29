import { Button } from "bootstrap";
import React from "react";
import Formcss from "./Form.module.css";
import { useHistory } from "react-router-dom";

function Form() {
  const history = useHistory();

  const submit = () => {
    history.push("/dashboard");
  };

  return (
    <div className={Formcss.main}>
      <form>
        <div>
          <label>Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <label>Gender</label>
          <input type="text" placeholder="Gender" />
        </div>

        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
