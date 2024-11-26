import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./Nav/NavLayout";
import Home from "./Home";
import Search from "./Search";
import AdminSignIn from "./Admin/adminSignIn";
import AdminChoice from "./Admin/adminChoice";
import MDetails from "./MDetails/MDetails";

function App() {
  
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path = "search" element ={<Search/>} />
        <Route path = "adminSignIn" element={<AdminSignIn/>} />
        <Route  path = "adminChoice" element = {<AdminChoice/>} />
        <Route path="details/:id" element={<MDetails />} />

        {/* <Route path = "description" element = {<Description/>} />  uncomment this and add the proper file name to link from search   */}
  
        
      



          </Route>
         
        </Routes>
      </BrowserRouter>
    );
}

export default App;
