import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import './components/SignUp.css'; // Import the CSS for the forms

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <div>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Go to Sign Up" : "Go to Login"}
        </button>
      </div>
      {isLogin ? <Login /> : <SignUp />}
    </div>
  );
}

export default App;
