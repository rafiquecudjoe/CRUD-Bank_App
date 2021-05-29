import { connect } from "react-redux";

const NameComp = (props) => {
  return (
    <div>
          <h1>Name : {props.profile.name}</h1>
          
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProp)
    (NameComp);
