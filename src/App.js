import { BrowserRouter } from "react-router-dom";
import Login from "./component/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;
