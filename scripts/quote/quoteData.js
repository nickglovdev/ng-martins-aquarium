let quoteCollection = []
 
const getQuoteData = () => {
    return fetch("http://localhost:8088/quotes").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfQuotes) => {
                // 100 percent sure the data is back
                quoteCollection = arrayOfQuotes
            }
        )
}