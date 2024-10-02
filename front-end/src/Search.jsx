import { useState } from "react"
import "./Search.css"

export default function Search() {

    const [SearchInput, setSearchInput] = useState("")

    const [itemsSearch, setSearch] = useState([

        
    ])


    const [DataSearch,SetSearchData] = useState([

        {searchResult: "Minecraft", id:1 ,reviewAverage:3, totalReviews:4},
        {searchResult: "Terreria", id:1 ,reviewAverage:3, totalReviews:4}

    ])



    function SearchUpdate(event) {

        setSearchInput(event.target.value)
        console.log(SearchInput)
    }


return( 

    <body>
        <div class = "core" >
            <h1>Search</h1>

                <input onChange={SearchUpdate}/>
        

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