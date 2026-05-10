const Node = require("./Node.js");
const test = ["-412","-1621 -412","-1622 -411","-1623 -411","-1624 -410","-1625 -410","-1625"];

function toNodeArray(data) {
    let arr = [], result = [];
    for(let i = 0; i < data.length; i++) {
        const sub = data[i].split(/[\s,]/);
        arr.push(sub[0], sub[1]);
    }
    arr.splice(1, 1);
    arr.pop();
    for (let j = 0; j < arr.length; j+=2) {
        result.push(new Node(arr[j], arr[j + 1]));
    }
    return result;
}

module.exports = toNodeArray;