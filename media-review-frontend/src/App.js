import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import './components/SignUp.css'; // Import the CSS for the forms

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <div>
        {isLogin ? <Login setIsLogin={setIsLogin} /> : <SignUp setIsLogin={setIsLogin} />}
      </div>
    </div>
  );
}

export default App;
