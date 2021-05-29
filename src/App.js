

import Form1 from "./Form1"
import Users from "./Users"


function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{flex:0.2}}>
      <Form1 />

      </div>
      <div style={{flex:0.8,justifyContent:"center"}}>
      <Users/>
      </div>
    
    


    </div>
   

 
      
   
    
  );
}

export default App;
