const Node = require("./Node.js");
const Street = require("./Street.js");

const {streets} = require("./rawData.json");
const street = new Street(streets[1]["1"][0], streets[1]["1"][1], streets[1]["1"][2]);
console.log(street);