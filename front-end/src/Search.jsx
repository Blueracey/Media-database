import { useState } from "react"
import "./Search.css"

export default function Search() {

    const [itemsSearch, setSearch] = useState([

        {searchResult: "placeholder", id:1 ,reviewAverage:3, totalReviews:4},
        {searchResult: "placeholder", id:1 ,reviewAverage:3, totalReviews:4}
    ])
return( 

    <body>
        <div class = "core" >
            <h1>Search</h1>

                <input/>
        

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