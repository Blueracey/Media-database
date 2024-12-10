import { useEffect ,useState } from "react"

import axios from 'axios'
import { useNavigate } from "react-router-dom"
import RequestForm from '../RequestForm/RequestForm';


const Admin = () => {
 const [request,setRequsts] = useState([])
 const [message,setMessage] = useState("")
 const [Title,setTitle] = useState("")
 const [Creator,setCreator] = useState("")
 const [Description,setDescription] = useState("")

    //get requests
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const responce = await axios.get('http://localhost:8091/api/requests');

                setRequsts(responce.data);


            } catch (error) {
                console.error('Error fetching Midia', error);
                setMessage('There was an error connecting to media server : ' + error)
                
            }
        };
        fetchProject();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault()
        var res; //used to get the details of the created Details page for the search page as a forign key 
        
        const requestData = { 
            title: Title,
            creator: Creator,
            details: Description,
           
        };
        try{
            const response = await axios.post("http://localhost:8091/api/media",requestData, {
                headers: {
                    "Content-Type": "application/json",
                }})

             res= response.data
             
        } 
        catch(error){
            setMessage("Project creation failed.")
            console.log(error)
        }

        const searchData = {
            mediaDetails: res,
            reviewAverage : 0,
            reviewCount : 0, //hard codes review average and count because the search function crtashes if they are null which at creation they should be 
            title : Title

        }
        try{
            const responce = await axios.post("http://localhost:8091/api/v1/search",searchData,{
                headers: {
                    "Content-Type": "application/json",
                }})
        } catch(error){
            setMessage("Project creation failed.")
            console.log(error)
        }
        setDescription("") //clears the form 
        setCreator("")
        setTitle("")

        
    }

    return(
        <div class = "core">
            <h1>Admin</h1>
            <div class = "row"> 
                <div class = "viewRequests"> 
                <label class = "RequestTitle">
                        <div >Title</div>
                        <div>Details</div>
                        <div>Type</div>
                        
                    </label>

                {request.map((item) => (
                <div key={item}>


                    <label class = "SearchData">
                        <div >{item.title}</div>
                        <div>{item.details}</div>
                        <div> {item.media_type}</div>
                       
                    </label>



                </div> 





            ))}

                </div>

                
                    <form onSubmit={handleSubmit} className="createMedia">
                        <label>Title</label>
                        <input
                            name="Title"
                            value={Title}
                            type="text"
                            placeholder="Book"
                            onChange={(e) => setTitle(e.target.value)} 
                            required
/>
                        <label>Creator</label>
                        <input
                            name="Creator"
                            type="text"
                            value={Creator}
                            placeholder="Author"
                            onChange={(e) => setCreator(e.target.value)} 
                            required
                        />

                        <label>Description</label>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)} // Correct: Extract value
                            placeholder="Description of media"
                            value={Description}
                            name="description"
                            type="text"
                            required
                        >
                        </textarea>
                        
                        <button type="submit" >Submit</button>

                    </form>
                    
                    
                    
                    
                </div>


            </div>


        
    )
}



export default Admin