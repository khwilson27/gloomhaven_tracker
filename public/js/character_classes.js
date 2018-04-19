 // ID's for Every Class
//-------------------------------
// 01 - Brute
// 02 - Tinkerer
// 03 - Spellweaver
// 04 - Scoundrel
// 05 - Cragheart
// 06 - Mindthief

var character_classes = {
    1: {
        name: "Inox Brute",
        mat: "assets/img/character_mats/Brute.JPG",
        perks: [
            {
                checkboxQuantity: 1,
                text: "Remove two -1 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Replace one -1 card with one +1 card"
            },
            {
                checkboxQuantity: 2,
                text: "Add two +1 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add one +3 card"
            },
            {
                checkboxQuantity: 2,
                text: "Add three [RECYCLE][PUSH 1] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add two [RECYCLE][PIERCE 3] cards "
            },
            {
                checkboxQuantity: 2,
                text: "Add one [RECYCLE][STUN] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add one [RECYCLE][DISARM] card and one [RECYCLE][MUDDLE] card"
            },
            {
                checkboxQuantity: 2,
                text: "Add one [RECYCLE][ADD TARGET] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add one +1 [SHIELD 1], Self card"
            },
            {
                checkboxQuantity: 1,
                text: "Ignore negative item effects and add one +1 card"
            }
        ]
    },
    2: {
        name: "Quatryl Tinkerer",
        mat: "assets/img/character_mats/Tinkerer.JPG",
        perks: [
            {
                checkboxQuantity: 2,
                text: "Remove two -1 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Replace one -2 card with one +0 card"
            },
            {
                checkboxQuantity: 1,
                text: "Add two +1 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add one +3 card"
            },
            {
                checkboxQuantity: 1,
                text: "Add two [RECYCLE][FIRE ELEMENT] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add three [RECYCLE][MUDDLE] cards "
            },
            {
                checkboxQuantity: 2,
                text: "Add one +1 [WOUND] card"
            },
            {
                checkboxQuantity: 2,
                text: "Add one +1 [IMMOBILIZE] card"
            },
            {
                checkboxQuantity: 2,
                text: "Add one +1 [HEAL 2] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add one +0 [ADD TARGET] card"
            },
            {
                checkboxQuantity: 1,
                text: "Ignore negative scenario effects"
            }
        ]
    },
    3: {
        name: "Orchid Spellweaver",
        mat: "assets/img/character_mats/Spellweaver.JPG",
        perks: [
            {
                checkboxQuantity: 1,
                text: "Remove four +0 cards"
            },
            {
                checkboxQuantity: 2,
                text: "Replace one -1 card with one +1 card"
            },
            {
                checkboxQuantity: 2,
                text: "Add two +1 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add one +0 [STUN] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add one +1 [WOUND] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add one +1 [CURSE] card"
            },
            {
                checkboxQuantity: 2,
                text: "Add one +2 [FIRE ELEMENT] card"
            },
            {
                checkboxQuantity: 2,
                text: "Add one +2 [ICE ELEMENT] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add one [RECYCLE][EARTH ELEMENT] and one [RECYCLE][AIR ELEMENT] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add one [RECYCLE][LIGHT ELEMENT] and one [RECYCLE][DARK ELEMENT] card"
            }
        ]
    },
    4: {
        name: "Human Scoundrel",
        mat: "assets/img/character_mats/Scoundrel.JPG",
        perks: [
            {
                checkboxQuantity: 2,
                text: "Remove two -1 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Remove four +0 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Replace one -2 card with one +0 card"
            },
            {
                checkboxQuantity: 1,
                text: "Replace one -1 card with one +1 card"
            },
            {
                checkboxQuantity: 2,
                text: "Replace one +0 card with one +2 card"
            },
            {
                checkboxQuantity: 2,
                text: "Add two [RECYCLE] +1 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add two [RECYCLE][PIERCE 3] cards"
            },
            {
                checkboxQuantity: 2,
                text: "Add two [RECYCLE][POISON] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add two [RECYCLE][MUDDLE] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add one [RECYCLE][INVISIBLE] card"
            },
            {
                checkboxQuantity: 1,
                text: "Ignore negative scenario effects"
            }
        ]
    },
    5: {
        name: "Savvas Cragheart",
        mat: "assets/img/character_mats/Cragheart.JPG",
        perks: [
            {
                checkboxQuantity: 1,
                text: "Remove four +0 cards"
            },
            {
                checkboxQuantity: 3,
                text: "Replace one -1 card with one +1 card"
            },
            {
                checkboxQuantity: 1,
                text: "Add one -2 card and two +2 cards"
            },
            {
                checkboxQuantity: 2,
                text: "Add one +1 [IMMOBILIZE] card"
            },
            {
                checkboxQuantity: 2,
                text: "Add one +2 [MUDDLE] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add two [RECYCLE][PUSH 2] cards "
            },
            {
                checkboxQuantity: 2,
                text: "Add two [RECYCLE][EARTH ELEMENT] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add two [RECYCLE][AIR ELEMENT] card"
            },
            {
                checkboxQuantity: 1,
                text: "Ignore negative item effects"
            },
            {
                checkboxQuantity: 1,
                text: "Ignore negative scenario effects"
            }
        ]
    },
    6: {
        name: "Vermling Mindtheif",
        mat: "assets/img/character_mats/Mindtheif.JPG",
        perks: [
            {
                checkboxQuantity: 2,
                text: "Remove two -1 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Remove four +0 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Replace two +1 cards with two +2 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Replace one -2 cards with one +0 cards"
            },
            {
                checkboxQuantity: 2,
                text: "Add one +2 [ICE ELEMENT] card"
            },
            {
                checkboxQuantity: 2,
                text: "Add two [RECYCLE] +1 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add three [RECYCLE][PULL 1] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add three [RECYCLE][MUDDLE] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add two [RECYCLE][IMMOBILIZE] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add one [RECYCLE][STUN] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add one [RECYCLE][DISARM] and one [RECYCLE][MUDDLE] card"
            },
            {
                checkboxQuantity: 1,
                text: "Ignore negative scenario effects"
            }
        ]
    }
} //close class object
