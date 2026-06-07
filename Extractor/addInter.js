const data = require("./data.json");
const fs = require("fs");

async function addIntersections(...intersections) {
    for (let i = 0; i < intersections.length; i++) {
        data.intersections.push(intersections[i]);
    }
    console.log(data.intersections);
    fs.writeFile("./data.json", JSON.stringify(data, null, 2), err => console.error(err))
    
}
module.exports = addIntersections;