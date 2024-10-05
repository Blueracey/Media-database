import React from "react"; import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Nav.css"
function Navbar() {
//nagiation bar links to all three of the pages 
    return (
        <nav>  
            <div>


               
            <Link class= "link1" to="/">Sign in</Link>


            <Link class= "link2" to="/Search">Search</Link>
            
            </div>

        
        
        
        </nav>
        

    )
}

export default Navbar