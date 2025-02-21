import Number from "./Number";
import Text from "./Text";
const Parent =()=>{
    var styling={
        textAlign:"center",
        backgroundColor:"grey",
        color:"white",
        border:"7.5px solid black",
        borderRadius:"2px",
        margin:"10px",
    }
    return(
        <div style={styling}>
            <h1><b>Welcome to examaple Memo example</b></h1>
            <h2 ><Number /></h2>
            <h2 ><Text /></h2>
        </div>
    )
}
export default Parent;