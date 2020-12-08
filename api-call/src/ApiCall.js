import React, {useEffect, useState} from 'react'
const ApiCall = () => {
const [data,setData] = useState([]);
   
    // we will do conditional rendering
    // if data is empty we will show loading loader
    // if not we will show the data

    const fetchData = async() => {
        const res =await fetch('https://hubblesite.org/api/v3/news')
        const resToJSON = await res.json()
        await setData(resToJSON)
    }
    useEffect(() =>{
        fetchData()
    })
    if(data.length === 0){
        return(
            <div>
                 <h1> have patience loading data </h1>
            </div>
        )
    }
    else{
        return(
           <ul>
               {data.map(news => <li> { news.name} </li>)}
           </ul>
        )
    }
    
   

   
}

export default ApiCall