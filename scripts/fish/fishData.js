const fishCollection = [
    {
        species: "Mr. Grumpy",
        length: 3,
        name: "Guppy",
        location: "Ocean of Moody",
        food: "Chips",
        picture:"https://epond.eu/wp-content/uploads/2019/12/Purple-Queen-Guppy-Males.jpg"

    },
    {
        species: "Parrot Fish",
        length: 8,
        name: "Angus",
        location: "Sea of Google",
        food: "algae",
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg"

    },
    {
        species: "Puffer",
        length: 3,
        name: "Tim",
        location: "Sea of Tools",
        food: "Nails",
        picture:"https://www.seattleaquarium.org/sites/default/files/images/shutterstock_83594650.jpg"

    },
    {
        species: "King Fish",
        length: 142,
        name: "Lord Fishy Pants",
        location: "Sea of Royalty",
        food: "Gold",
        picture:"https://www.nationalgeographic.com/content/dam/animals/pictures/hero/fish-hero.adapt.1900.1.jpg"

    },
    {
        species: "Forhead Kissing Fish",
        length: 5,
        name: "Kissingly",
        location: "Sea of Love",
        food: "Love",
        picture:"https://www.thisiscolossal.com/wp-content/uploads/2019/06/tsubaki-12.jpg"

    },
    {
        species: "Flying Fish",
        length: 244,
        name: "Co-Pilot Troy",
        location: "The Skys of Arcadia",
        food: "Sky Pirates",
        picture:"https://cdn.mos.cms.futurecdn.net/RY2EpSo74hvYXyAVpTN2Gg-1200-80.jpg"

    }
]

// 3, 6, 9, 12, etc... fish
const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0 && fish.length % 5 !== 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = () => {
    const soldiers = []
    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldiers.push(fish)
        }
    }

    return soldiers
}

// Any fish not a multiple of 3 or 5
const nonHolyFish = () => {
    const regularFish = []
    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            regularFish.push(fish)
        }
    }

    return regularFish
}