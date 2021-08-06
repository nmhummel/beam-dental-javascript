//import RefillBoxes from "./views/pages/RefillBoxes";

const mainBody = document.querySelector(".main")
const familyMembers = document.querySelector(".family-members")
const BASE_URL = 'https://beamtech.github.io/boxing-kata-js/perks.json';
// don't need these if we use destructured ones below -kb
// let blueBrushes = 0;
// let pinkBrushes = 0;
// let greenBrushes = 0;

// same as above, just destructuring here for fun to see if it would work and it did yay!: -kb
let [greenBrushes, pinkBrushes, blueBrushes, totalBrushes] = [0, 0, 0]
let replacementHeads = totalBrushes;
let starterBoxes = Math.ceil((totalBrushes + replacementHeads) / 4)
let refillBoxes = 0;

document.addEventListener("DOMContentLoaded", () => {
    getFamily()
})

let allMembers = {}

function getFamily(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(orders => {
        debugger
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
    // totaled this up here because otherwise, it was not updating propery
    // run the code and look at console log and you will see that the order it is being run 
    // is not what we expected because we are calling createColors from inside of fetch request and it is asyn -kb
    totalBrushes = blueBrushes + pinkBrushes + greenBrushes
    // these run after we call createColors: -kb
    console.log(totalBrushes)
    console.log('green:', greenBrushes, 'pink:', pinkBrushes, 'blue:', blueBrushes)
} 

// these run as soon as content is loaded when variables are declared but not yet assigned a value -kb
console.log(totalBrushes)
console.log('green:', greenBrushes, 'pink:', pinkBrushes, 'blue:', blueBrushes)


       // `
        // <ul>
        //     <li class="member">Customer ID: ${person.id}</li>
        //     <li class="member">Customer Name: ${person.name}</li>
        //     <li class="member">Toothbrush Color: ${person.brush_color}</li>
        //     <li class="member">Primary Insured's Customer ID: ${person.primary_insured_id || `N/A`}</li>
        //     <li class="member">Contract's Effective Date: ${person.contract_effective_date}</li>
        // </ul>
        // `
    

// moved this to DOMContentLoaded at the top to run right away -kb
// getFamily();