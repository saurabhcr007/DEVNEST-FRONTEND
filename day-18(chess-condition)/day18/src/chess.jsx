import "./style.css"

function Chess (props) {
     return(
            <div className="Box" style={{backgroundColor:props.backgroundColor}}></div>
     )
}
function Set () {
    return(
        <div className="geeks">
            {
            [...Array(64)].map((element,index)=>{
                var COLOR = "chessmaster";
            if((Math.floor(index/8)%2===0 && index%2===0) || (Math.floor(index/8)%2!==0 && index%2!==0))
            {
                COLOR="black";
            }
            else
            {
                COLOR="white";
            }
            return(
                <Chess backgroundColor={COLOR}/>
            )
            }    
    )}
    </div>
    )
}

export default Set;