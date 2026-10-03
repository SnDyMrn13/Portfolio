
import randomNumber from "./randomNumber"

function Fortune(){
 let wisdom =[
    "Fortune favors the Bold.",
    "Have Faith.",
    "Don't count your chickens before they're hatched."
 ] 
 let old = randomNumber(0, wisdom.length - 1)
 return <p>{wisdom[old]}</p>
}


export default Fortune