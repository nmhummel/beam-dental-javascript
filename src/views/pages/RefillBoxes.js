class RefillBoxes {
    constructor(BASE_URL) {
        this.baseurl = BASE_URL
    }

    getFamily() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(orders => createFamilies(orders))         
        .catch((error) => { alert(error.message) })
    }

    createFamilies(orders) {
        orders.forEach(person => {
            new Member(person.id, person.name, person.brush_color, person.primary_insured_id, person.contract_effective_date)
        })
    }

}
