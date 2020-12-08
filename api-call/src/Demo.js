import React, { useEffect , useState } from 'react'

const Demo = () =>{
    const [data,setData] = useState([])
    const fetchData = async() =>{
      const res =await  fetch('https://jsonplaceholder.typicode.com/posts')
       const resJson = await res.json()

       await console.log('dat recieved ', resJson)
       await setData(resJson)
    }

    useEffect(() => fetchData())

    return(
        <ul>
            {data.map(elemet => <li>  { elemet.id} </li>)}
        </ul>
    )
}

export default Demo;