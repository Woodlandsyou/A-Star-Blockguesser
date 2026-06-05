const Node = require("./Node.js");
const Street = require("./Street.js");
const toNodeArray = require("./toNodeArray.js");
const fs = require("fs");
const streets = require("../ignore/rawData.json");

const data = {streets:[], intersections:[]};
for (let i = 1; i < streets.length; i++) {
    data.streets.push(new Street(streets[i][i][0], streets[i][i][1], streets[i][i][2], toNodeArray(streets[i][i].slice(3))));
}
fs.writeFile("./data.json", JSON.stringify(data, null, 2), err => console.error(err));