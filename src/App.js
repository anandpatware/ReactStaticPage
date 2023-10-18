import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Project from "./Components/project";

function App() {
  const msg = () => {
    toast("anand   ");
  };
  return (
    <div className="App">
      <Project />
    </div>
  );
}

export default App;
