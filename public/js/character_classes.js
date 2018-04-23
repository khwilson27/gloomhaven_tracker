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
                text: "Add three &#8635[PUSH 1] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add two &#8635[PIERCE 3] cards "
            },
            {
                checkboxQuantity: 2,
                text: "Add one &#8635[STUN] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add one &#8635[DISARM] card and one &#8635[MUDDLE] card"
            },
            {
                checkboxQuantity: 2,
                text: "Add one &#8635[ADD TARGET] card"
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
                text: "Add two &#8635[FIRE ELEMENT] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add three &#8635[MUDDLE] cards "
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
                text: "Add one &#8635[EARTH ELEMENT] and one &#8635[AIR ELEMENT] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add one &#8635[LIGHT ELEMENT] and one &#8635[DARK ELEMENT] card"
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
                text: "Add two &#8635 +1 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add two &#8635[PIERCE 3] cards"
            },
            {
                checkboxQuantity: 2,
                text: "Add two &#8635[POISON] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add two &#8635[MUDDLE] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add one &#8635[INVISIBLE] card"
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
                text: "Add two &#8635[PUSH 2] cards "
            },
            {
                checkboxQuantity: 2,
                text: "Add two &#8635[EARTH ELEMENT] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add two &#8635[AIR ELEMENT] card"
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
                text: "Add two &#8635 +1 cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add three &#8635[PULL 1] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add three &#8635[MUDDLE] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add two &#8635[IMMOBILIZE] cards"
            },
            {
                checkboxQuantity: 1,
                text: "Add one &#8635[STUN] card"
            },
            {
                checkboxQuantity: 1,
                text: "Add one &#8635[DISARM] and one &#8635[MUDDLE] card"
            },
            {
                checkboxQuantity: 1,
                text: "Ignore negative scenario effects"
            }
        ]
    }
} //close class object
