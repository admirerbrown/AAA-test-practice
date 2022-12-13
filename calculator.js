const calculator = {
    add: (num1 , num2)=>{
        const sum = num1 + num2;
        return sum;
    },
    subtract: (num1, num2)=>{
        const takeaway = num1 - num2;
        return takeaway;
    },
    divide: (num1 , num2)=>{
        const slash = num1 / num2;
        return slash;
    },
    multiply: (num1 , num2)=>{
        const result = num1 * num2;
        return result;
    },
}

module.exports = calculator;