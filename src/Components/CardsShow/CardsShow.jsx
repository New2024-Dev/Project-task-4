import "./CardsShow.css"
import Cardsitem from "../Cardsitem/Cardsitem"
import SuperIcon from "/assets/Images/supervisor.svg"
import TeamIcon from "/assets/Images/team-builder.svg"
import KamrIcon from "/assets/Images/karma.svg"
import CalcIcon from "/assets/Images/calculator.svg"

function CardsShow(){
const Arrayofobjects = [
    {Cardheader: "Supervisor", cardbody:"Monitors activity to identify project roadblocks", 
        cardimg: SuperIcon, color: "color1", id:1, grid: "card1",},
    {Cardheader: "Team Builder", cardbody:"Scans our talent network to create the optimal team for your project", 
        cardimg: TeamIcon, color: "color2", id:2, grid: "card2",},
    {Cardheader: "Karma", cardbody:"Regularly evaluates our talent to ensure quality",
        cardimg: KamrIcon, color: "color3", id:3, grid: "card3",}, 
    {Cardheader: "Calculator", cardbody: "Uses data from past projects to provide better delivery estimates",
        cardimg: CalcIcon, color: "color4", id:4, grid: "card4",}
        
]

    return(
        <div id="cards">
            {Arrayofobjects.map((item) => {
                const Bordtop = 
                item.color === "color1"? 'className1' :
                item.color === "color2"? 'className2' :
                item.color === "color3"? 'className3' :
                item.color === "color4"? 'className4' : '';
            
                return (
                    
                    <Cardsitem 
                    key={item.id}
                    Cardheader= {item.Cardheader}
                    cardbody= {item.cardbody}
                    cardimg= {item.cardimg}
                    color={item.color}
                    grid={item.grid}
                    Bordtop={Bordtop}>  
                    </Cardsitem>
                    

                )
            })}
        </div>


        
        
    )
}

export default CardsShow

