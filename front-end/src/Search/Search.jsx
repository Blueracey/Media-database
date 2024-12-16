import { useEffect ,useState } from "react"
import "./Search.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import RequestForm from '../RequestForm/RequestForm';

export default function Search() {
    // input variable  
    const [SearchInput, setSearchInput] = useState("")
    //visible array 
    const [itemsSearch, setSearch] = useState([])
    const [message, setMessage] = useState('')

    const navigate = useNavigate()
    


    const [DataSearch,SetSearchData] = useState([])
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const responce = await axios.get('http://localhost:8091/api/v1/search');

                SetSearchData(responce.data);
                console.log(responce.data)

            } catch (error) {
                console.error('Error fetching Midia', error);
                setMessage('There was an error connecting to media server : ' + error)
                
            }
        };
        fetchProject();
    }, []);

    
   


    
    function SearchUpdate(event) {

        setSearchInput(event.target.value)
        
    }
    //checks through the Server Data 
    function Results(){
        let loop = DataSearch.length;
        let matchingResults = [];
        let data = DataSearch.map(sort);
       
       for (let i = 0; i < loop; i++)
             {
            if (data[i][0].toLowerCase().includes(SearchInput.toLowerCase())) //checks the data  column of i on 0 which is the name row
            {
            matchingResults.push(DataSearch[i]); //appends the results to a 
            }
        }


        setSearch(matchingResults); 


    }


        function sort(item){
            console.log(item.mediaDetails.id)
            return[item.title,item.reviewAverage,item.reviewCount,item.mediaDetails.id]
        }
        function goToDescription(id) {
            navigate(`/details/${id}`) //wil redirect to the description page once that exsists and we have un commented the router for it 
        }

    




return( 

    <body>
        <div class = "core" >
            <h1>Search</h1>

                <input onChange={SearchUpdate}/>
                <button onClick= {Results}>GO </button>

        <ul> 

        <label class = "SearchTitle">
                        <div >Title</div>
                        <div>Review average</div>
                        <div>Total Reviews</div>
                        
                    </label>





            {itemsSearch.map((item) => (
                <div key={item}>

                    <label class = "SearchData">
                        <div >{item.title}</div>
                        <div>Review average {item.reviewAverage}</div>
                        <div>Total Reviews {item.reviewCount}</div>
                        <button onClick={() =>goToDescription(item.mediaDetails.id)}> Details</button>
                    </label>



                </div>





            ))}




        </ul>
        <h3>{message}</h3>
        </div>


    </body>
    
)
}