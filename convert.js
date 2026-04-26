const Node = require("../Node.js");

const {string} = require("./data.json");
let street = (data => {
    let street = [];
    for (let i = 0; i < data.length; i+=2) {
        street.push(new Node(data[i], data[i+1], []));
    }
    for (let j = 0; j < street.length; j++) {
        street[j].connections.push(street[j-1], street[j+1]);
    }
    return street;
})(string.split(/[\s,]/));
console.log(street);