class Member {

    static allMembers = []

    constructor(id, name, brush_color, primary_insured_id, contract_effective_date) {
        this.id = id
        this.name = name
        this.brush_color = brush_color
        this.primary_insured_id = primary_insured_id
        this.contract_effective_date = contract_effective_date
        Member.allMembers.push(this)
        console.log(Member.allMembers)
        this.element = document.createElement('li')
        this.element.className = `side-list`
        this.element.innerHTML = `<b>${moves}</b> by <i>${username}</i> on Board #${board_id}`
        memberList.appendChild(this.element) //pointless
    }

    static sortMembers = () => {
        Member.allMembers = Member.allMembers.sort(function(a,b) {
            return a.brush_color - b.brush_color
        })
        memberList.innerHTML = `<div class="dark-text">Family Members</div>`
        this.allMembers.forEach((member) => {
            memberList.appendChild(member.element)
        })
    }

}