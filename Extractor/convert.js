const Node = require("./Node.js");
const Street = require("./Street.js");
const toNodeArray = require("./toNodeArray.js");
const fs = require("fs");
const streets = require("./rawData.json");

// const street = new Street(streets[1][1][0], streets[1][1][1], streets[1][1][2], [], toNodeArray(streets[1][1].slice(3)));
const data = [];
for (let i = 1; i < streets.length; i++) {
    data.push(new Street(streets[i][i][0], streets[i][i][1], streets[i][i][2], [], toNodeArray(streets[i][i].slice(3))));
}
fs.writeFile("./data.json", JSON.stringify(data, null, 2), err => console.error(err));