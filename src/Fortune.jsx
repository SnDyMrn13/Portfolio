
import {useState} from 'react'
import randomNumber from "./randomNumber"

function Fortune(){
 const wisdom =[
    "Fortune favors the Bold.",
    "Have Faith.",
    "Don't count your chickens before they're hatched."
 ] 
 const [index, setIndex] = useState(randomNumber(0, wisdom.length - 1))
 const newFortune = () =>{
   setIndex(randomNumber(0, wisdom.length - 1 ))
 }
 return(
   <div>
       <p>{wisdom[index]}</p>
       <button onClick={newFortune}>New Fortune</button>
   </div>
 )

}
export default Fortune