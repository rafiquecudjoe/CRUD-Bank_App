import Form1 from "./Form1";
import Users from "./Users";
import Modal from "./components/Modal"

function App() {
  return (
    <div className="body" style={{ display: "flex" }}>
      <div style={{ flex: 0.2 }}>
        <Form1 />
      </div>
      <div style={{ flex: 0.8, justifyContent: "center" }}>
        <Users />
      
      </div>
    </div>
  );
}

export default App;
