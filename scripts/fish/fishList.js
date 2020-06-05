// Displays only holy fish from selection
const fishTypeDropdown = document.querySelector(".typeChoice")
const contentTarget = document.querySelector(".fishList")

const clearFishList = () => contentTarget.innerHTML = ""


fishTypeDropdown.addEventListener("change", (changeEvent) => {
    // Get the value of the option chosen by the user
    const userChoice = changeEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearFishList()
        showHolyFish()
    } else if (userChoice === "soldier") {
        clearFishList()
        showSoldierFish()
    } else if (userChoice === "plebs") {
        clearFishList()
        showCommonFish()
    }
})
const fishVisibilityButton = document.querySelector(".toggleFish")

fishVisibilityButton.addEventListener("click", (clickEvent) => {
    // const locationListArticle = document.querySelector(".locationList")
    // locationListArticle.classList.toggle("hidden")

    document.querySelector(".fishList").classList.toggle("hidden")
})


// Function to show holy fish in the browser
const showHolyFish = () => {
    const holyFish = mostHolyFish()

    for (const holyFishObject of holyFish) {
        const HolyFishHTMLRepresentation = fishConverter(holyFishObject)

        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += HolyFishHTMLRepresentation
    }
}

// Function to show soldier fish in the browser
const showSoldierFish = () => {
    const soldier = soldierFish()

    for (const soldierFishObject of soldier) {
        const soldierFishHTMLRepresentation = fishConverter(soldierFishObject)

        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += soldierFishHTMLRepresentation
    }
}

// Function to show common fish in the browser
const showCommonFish = () => {
    const common = nonHolyFish()

    for (const commonFishObject of common) {
        const commonFishHTMLRepresentation = fishConverter(commonFishObject)

        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += commonFishHTMLRepresentation
    }
}


const fishList = () => {
    // Invoke all three functions here
    showHolyFish()
    showSoldierFish()
    showCommonFish()
}







