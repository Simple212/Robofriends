import React ,{useState,useEffect}  from "react";
import CardList from "./CardList"
import Searchbox from './searchbox';

import'./App.css';

function App() {

    const [robots2 , setrobots2] = useState([]) 
    const [ searchfilled ,  setsearchfilled] =useState('')
    const [ count ,  setCount] =useState(0)

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users =>{
            setrobots2(users)
        })
        console.log(count)
    },[count])

    const onSearchChange = (event) => {
        setsearchfilled(event.target.value)
    }
        
        const filteredRobots = robots2.filter(robots => {
            return robots.name.toLowerCase().includes(searchfilled.toLowerCase())
        })
    
    return(
        
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click Me!</button>
            <Searchbox  search2={onSearchChange}/>
            <CardList robots2 = { filteredRobots }  />
        </div>
    )

}
export default App