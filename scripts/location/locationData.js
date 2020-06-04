let locationCollection = []
 
const getLocationData = () => {
    return fetch("http://localhost:8088/locations").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfLocations) => {
                // 100 percent sure the data is back
                locationCollection = arrayOfLocations
            }
        )
}