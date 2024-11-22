import { useEffect ,useState } from "react"
import "./Search.css"
import axios from 'axios'

export default function Search() {
    // input variable  
    const [SearchInput, setSearchInput] = useState("")
    //visible array 
    const [itemsSearch, setSearch] = useState([])


    


    // dummy data
    const [DataSearch,SetSearchData] = useState([])
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const responce = await axios.get('http://localhost:8091/api/v1/search');

                SetSearchData(responce.data);

            } catch (error) {
                console.error('Error fetching Midia', error);
                
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
        console.log(data[1].name)
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
            return[item.name,item.reviewAverage,item.reviewCount]
        }

    




return( 

    <body>
        <div class = "core" >
            <h1>Search</h1>

                <input onChange={SearchUpdate}/>
                <button onClick= {Results}>GO </button>

        <ul> 
            {itemsSearch.map((item) => (
                <div key={item}>

                    <label>
                        <div>{item.name}</div>
                        <div>Review average {item.reviewAverage}</div>
                        <div>Total Reviews {item.reviewCount}</div>
                    </label>



                </div>





            ))}




        </ul>
        </div>


    </body>
    
)
}