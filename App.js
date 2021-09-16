import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AlertCpt from "./AlertCpt";
import AlertDismissibleExample from "./AlertDismissibleExample";
import AlertDismissible from "./AlertDismissible";

function App() {
  return (
    <div className="App">
      <Button variant="primary"> Press Me</Button>
      <AlertCpt />
      <AlertDismissibleExample />
      <AlertDismissible />
    </div>
  );
}

export default App;
