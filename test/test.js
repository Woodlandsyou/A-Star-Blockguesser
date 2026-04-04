const Node = require("../Node.js");

// const {string} = fetch("./ignore/test/data.json").then(res => res.json()).then(res => {return res}).catch(err => console.error(err));
const {string} = require("./data.json");
let grid = (data => {
    let grid = [];
    for (let i = 0; i < data.length; i+=2) {
        grid.push(new Node(data[i], data[i+1], []));
    }
    for (let j = 0; j < grid.length; j++) {
        grid[j].connections.push(grid[j-1], grid[j+1]);
    }
    return grid;
})(string.split(/[\s,]/));
console.log(grid);