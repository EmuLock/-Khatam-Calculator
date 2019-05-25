function calculateDaysNeeded() {
    const totalPages = 604
    const inputValue = document.getElementById("number").value
    const answer = totalPages/inputValue 
    document.getElementById("results").innerHTML = answer
}

function calculatePages() {
    const totalPages = 604
    const inputValue = document.getElementById("numberOfDays").value
    const answer = totalPages/inputValue
    document.getElementById("endResults").innerHTML = answer
}