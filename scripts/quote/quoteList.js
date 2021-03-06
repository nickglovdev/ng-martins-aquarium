const quoteVisibilityButton = document.querySelector(".toggleQuote")

quoteVisibilityButton.addEventListener("click", (clickEvent) => {
    

    document.querySelector(".quoteList").classList.toggle("hidden")
})

const quoteList = () => {
    // Iterate the collection of quote objects
    for (const currentQuoteObject of quoteCollection) {

        // Convert the current quote to its HTML representation
        const quoteHTML = quoteConverter(currentQuoteObject)

        // Find the <article> element in index.html
        const quoteArticleElement = document.querySelector(".quoteList")

        // Put the quote HTML representation inside the <article> element
        quoteArticleElement.innerHTML += quoteHTML
    }
}