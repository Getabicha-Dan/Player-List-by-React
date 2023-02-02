import { useState } from "react";
const PlayerAdder = ({handleAdder}) => {
    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value);
    }
   
    return ( 
        <div className="nameAdder">
            <input type="text" placeholder="Add player name" onChange={handleChange}/>
            <button onClick={()=>handleAdder(name)}> Add Player</button>     
        </div> 
     );
}
 
export default PlayerAdder;
