const Node = require("./Node.js");
let {streets} = require("./rawData.json");
streets = streets[1]["1"];
for (let i = 0; i < 3; i++) {
    streets.shift();
}
const string = streets;

function toNodeArray(data) {
    // data = string.split(/[\s,]/);
    let arr = [];
    for(let i = 0; i < data.length; i++) {
        const sub = data[i].split(/[\s,]/);
        arr.push(sub[0], sub[1]);
         
    }
    console.log(arr);
}
toNodeArray(string);