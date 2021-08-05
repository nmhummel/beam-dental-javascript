const mainBody = document.querySelector(".main")

const routes = {
    '/' : StarterBoxes, 
    '/refills'   : RefillBoxes
};

let getFamily = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch("https://beamtech.github.io/boxing-kata-js/perks.json", options)
        const json = await response.json();
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}


let StarterBoxes = (people) => (
    `
    <section class="section">
        <h1> Home </h1>
        <ul>
            ${people.map(person => 
                `
                    <li>${person.id}</li>
                    <li>${person.name}</li>
                    <li>${person.brush_color}</li>
                    <li>${person.primary_insured_id}</li>
                    <li>${person.contract_effective_date}</li>
                `
            )}
        </ul>
    </section>
`)

getFamily();