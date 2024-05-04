function formatFirstLetter(word) {

    let firstLetter = word.charAt(0).toUpperCase()
    let letters = word.slice(1).toLowerCase()

    return firstLetter + letters
}

export default formatFirstLetter;