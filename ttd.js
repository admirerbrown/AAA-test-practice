const capitalize = (string)=>{
    const firstLetter = string.charAt(0);
    const cap = firstLetter.toUpperCase();
    const newStr = string.replace(firstLetter, cap);
    return newStr;
}

module.exports = capitalize;