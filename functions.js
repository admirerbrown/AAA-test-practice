const functions = {
    stringLength:
        (string) => {
            const strLen = string.length;
            if (strLen >= 1 && strLen <= 10) {
                return strLen;
            }
        },

        reverseString: (string)=> {
            let openStr = string.split('');
            let reverseArr = openStr.reverse();
            let mergeArr = reverseArr.join('');
            return mergeArr;
        }
}


// console.log(functions.reverseString('sexxygogome'));

module.exports = functions;