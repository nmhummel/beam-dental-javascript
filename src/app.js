//import RefillBoxes from "./views/pages/RefillBoxes";

const mainBody = document.querySelector(".main")
const familyMembers = document.querySelector(".family-members")
const BASE_URL = 'https://beamtech.github.io/boxing-kata-js/perks.json';

document.addEventListener("DOMContentLoaded", () => {
    //createColors();
})

let allMembers = {}

let getFamily = () => {
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(orders => createColors(orders))         
    .catch((error) => { alert(error.message) })
}


let blueBrushes = 0;
let pinkBrushes = 0;
let greenBrushes = 0;

let createColors = (orders) => {
    console.log("orders", orders)
    orders.map(person => {
        console.log("person", person)
        if (person.brush_color === "green") {
            //debugger
            return greenBrushes++
        } else if (person.brush_color === "pink") {
            return pinkBrushes++
        } else {
            return blueBrushes++
        }
    })
} 

let totalBrushes = blueBrushes + pinkBrushes + greenBrushes;
let replacementHeads = totalBrushes;
let starterBoxes = Math.ceil((totalBrushes + replacementHeads) / 4)
let refillBoxes = 0;

console.log("pinkBrushes", pinkBrushes)

       // `
        // <ul>
        //     <li class="member">Customer ID: ${person.id}</li>
        //     <li class="member">Customer Name: ${person.name}</li>
        //     <li class="member">Toothbrush Color: ${person.brush_color}</li>
        //     <li class="member">Primary Insured's Customer ID: ${person.primary_insured_id || `N/A`}</li>
        //     <li class="member">Contract's Effective Date: ${person.contract_effective_date}</li>
        // </ul>
        // `
    


getFamily();