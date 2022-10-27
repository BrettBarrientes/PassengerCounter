
// document.getElementById("count-el").innerText = 5
// DOM - how you use JS to modify a website
// Initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEL.innerText = count
    
}

// Create a Save Button

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEL.textContent = 0
    count = 0
}


