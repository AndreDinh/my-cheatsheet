import logo from "./logo.svg";
import "./App.css";
// import Login from "./components/login";
// import List from './components/apiRequest';
// import ButtonAuthorized from "./components/button";
import Blog from "./components/blog";
import { useState } from "react";
function App() {
  const [authorized, clickedAuthorized] = useState(false);

  const authorizedHandler = () => {
    console.log("you are authorized");
  };

  return (
    <div className="App">
  
      {/* <ButtonAuthorized
        onClick={() => clickedAuthorized(true)}
        authorized={authorized}
      />

      <Login />
      {!authorized ? <Blog /> : <Nav to="/thing/thing" />} */}
      
    </div>
  );
}

export default App;
