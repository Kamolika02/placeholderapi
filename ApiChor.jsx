import React, { useState ,useEffect} from 'react'
import './apichori.css'
const ApiChor = () => {
    const [items, setItems] = useState([]);
    const apiCall= async ()=>{
      const temp= await fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(res=> res.json())
      setItems(temp.slice(0,50));
    //   console.log(items);
   }
   useEffect(() => {
       apiCall();
   },[]);
    return (
        <div className="api">
            {console.log(items)}
            { 
            items.map(val =>{
                return(
                    <div key={val.id}>
                        <p>{val.title}</p>
                        <img src={val.url} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default ApiChor
