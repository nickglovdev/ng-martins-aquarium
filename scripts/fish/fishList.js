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







