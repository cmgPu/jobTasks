function encode(string) {
    // YOUR IMPLEMENTATION...
    let convertedStringToArray = string.split('');
    let vowels = 'aeiouAEIOU'.split('');

    for (let index = 0; index < convertedStringToArray.length; index++) {
        if (vowels.includes(convertedStringToArray[index])) {
            convertedStringToArray[index] += 'p' + convertedStringToArray[index].toLowerCase();
        }
    }

    return convertedStringToArray.join('');
};

module.exports = { encode };