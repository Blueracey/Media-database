import { useState } from "react"
import "./Search.css"

export default function Search() {
    // input variable  
    const [SearchInput, setSearchInput] = useState("")
    //visible array 
    const [itemsSearch, setSearch] = useState([

        
    ])

    // dummy data
    const [DataSearch,SetSearchData] = useState([

        {searchResult: "Minecraft", id:1 ,reviewAverage:4, totalReviews:3},
        {searchResult: "Terreria", id:2 ,reviewAverage:4, totalReviews:4},
        {searchResult: "Minefelet", id:3 ,reviewAverage:3, totalReviews:6}

    ])
   


    
    function SearchUpdate(event) {

        setSearchInput(event.target.value)
        
    }
    //checks through the Server Data 
    function Results(){
        let loop = DataSearch.length;
        let matchingResults = [];


        for (let i = 0; i < loop; i++)
             {
            if (DataSearch[i].searchResult.toLowerCase().includes(SearchInput.toLowerCase())) 
            {
            matchingResults.push(DataSearch[i]);
            }
        }


        setSearch(matchingResults); 


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
                        <div>{item.searchResult}</div>
                        <div>Review average {item.reviewAverage}</div>
                        <div>Total Reviews {item.totalReviews}</div>
                    </label>



                </div>





            ))}




        </ul>
        </div>


    </body>
    
)
}