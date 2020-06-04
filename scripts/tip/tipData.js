let tipCollection = []
 
const getTipData = () => {
    return fetch("http://localhost:8088/tips").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfTips) => {
                // 100 percent sure the data is back
                tipCollection = arrayOfTips
            }
        )
}