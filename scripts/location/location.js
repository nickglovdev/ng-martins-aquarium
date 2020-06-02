const locationConverter = (locationObject) => {

    const locationHTMLRepresentation =
        `<section class="location">
            <div class="">
                <img class="location__picture"
                    src="${locationObject.img}"
                    alt="${locationObject.alt}" />
            </div>
            <div class="location__details">
               ${locationObject.text}
            </div>
        </section>`

    return locationHTMLRepresentation

}
