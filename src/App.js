import NameComp from "./NameComp"
import './App.css';
import NewnameComp from "./NewnameComp"
import Form from "./Form"
import { Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Form1 from "./Form1"
import Users from "./Users"


function App() {
  return (
    <div  style={{display:"flex" ,justifyContent:"space-around",paddingTop:"20px"}}>
      {/* <NameComp /> */}
      {/* <NewnameComp/> */}
      {/* <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/dashboard" component={Dashboard}/>

      </Switch> */}
      <Form1 />
      <Users/>
      
   
    </div>
  );
}

export default App;
