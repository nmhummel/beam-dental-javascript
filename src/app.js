//import RefillBoxes from "./views/pages/RefillBoxes";

const mainBody = document.querySelector(".main")
const starterSummary = document.querySelector(".starter-summary")
const refillSummary = document.querySelector(".refill-summary")
const BASE_URL = 'https://beamtech.github.io/boxing-kata-js/perks.json';

let [greenBrushes, pinkBrushes, blueBrushes, totalColors] = [0, 0, 0]
let starterBoxes = 0;
let refillBoxes = 0;

document.addEventListener("DOMContentLoaded", () => {
    getFamily()
})

let allMembers = {}

function getFamily(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(orders => {
        //debugger
        createColors(orders)
    })         
    .catch((error) => { alert(error.message) })
}

const createColors = (orders) => {
    orders.map(person => {
        if (person.brush_color === "green") {
            greenBrushes+=1
        } else if (person.brush_color === "pink") {
            pinkBrushes++
        } else {
            blueBrushes++
        }

    })

    totalColors = blueBrushes + pinkBrushes + greenBrushes
    let replacementHeads = totalColors;
    refillBoxes = Math.ceil(totalColors / 4)
    starterBoxes = Math.ceil((totalColors + replacementHeads) / 4)

    console.log("starterBoxes", starterBoxes)
    console.log("refill boxes", refillBoxes) // 4th - 2
    console.log("totalColors", totalColors)  // 5th - 5
    console.log('green:', greenBrushes, 'pink:', pinkBrushes, 'blue:', blueBrushes)  // 6th - 2,1,2

    starterSummary.innerHTML = `
  
    <p class="member">
       <u>SUMMARY:</u>
        <br>Starter Boxes: ${starterBoxes}
        <br>Brushes: ${totalColors}
        <br>Rebrlacement Heads: ${replacementHeads}
    </p>

    <ul>
        <li class="pink">${pinkBrushes} brushes</li>
        <li class="pink">${pinkBrushes} replacement heads</li>
    </ul>

    <ul>
        <li class="blue">${blueBrushes} brushes</li>
        <li class="blue">${blueBrushes} replacement heads</li>
    </ul>
    
    <ul>
        <li class="green">${greenBrushes} brushes</li>
        <li class="green">${greenBrushes} replacement heads</li>
    </ul>
    
    
    `

{/* <img src="blue bullet.png"> */}
} 

console.log("totalColors", totalColors) // 1st - undefined
console.log('green:', greenBrushes, 'pink:', pinkBrushes, 'blue:', blueBrushes)  // 2nd - 0,0,0
console.log("starterBoxes", starterBoxes) // 3rd - 0


       // `
        // <ul>
        //     <li class="member">Customer ID: ${person.id}</li>
        //     <li class="member">Customer Name: ${person.name}</li>
        //     <li class="member">Toothbrush Color: ${person.brush_color}</li>
        //     <li class="member">Primary Insured's Customer ID: ${person.primary_insured_id || `N/A`}</li>
        //     <li class="member">Contract's Effective Date: ${person.contract_effective_date}</li>
        // </ul>
        // `
    
