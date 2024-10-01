import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./Nav/NavLayout";
import Home from "./Home";
import Search from "./Search";
function App() {
  
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path = "search" element ={<Search/>} />
  
  
      



          </Route>
         
        </Routes>
      </BrowserRouter>
    );
}

export default App;
