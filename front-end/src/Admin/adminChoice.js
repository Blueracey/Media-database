import { useEffect ,useState } from "react"

import axios from 'axios'
import { useNavigate } from "react-router-dom"



 function AdminChoice()  {
    const navigate = useNavigate();



      

    return(
    <div className="core">
        <div>
            <button>Search result edit</button>
            <button>User edit</button>
            <button>Media details edit</button>
        </div>
    </div>)
 }





 export default AdminChoice