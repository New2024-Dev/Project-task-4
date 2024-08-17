import "./Cardsitem.css"

function Cardsitem(props){
    
    
    return(
        <div id="try" className={props.grid}>
      
<div id="supercard" className={props.Bordtop}>
    <h2 id="suphead">{props.Cardheader}</h2>
    <p id="supparg">{props.cardbody}</p>
    <img id="supimg" src={props.cardimg}/>
    
</div>

</div>
    )
}

export default Cardsitem