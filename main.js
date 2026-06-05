export default function AStar(start, destination, context) {
    const streets = context.streets;
    function setF(node, prev) {
        node.prev = prev === node ? null:prev;
        node.g = getDistance(prev, node);
        node.h = getDistance(destination, node);
        node.f = node.g + node.h;
    }
    function find(node) {
        for (let i = 0; i < streets.length; i++) {
            for (let j = 0; j < streets[i].coordinates.length; j++) {
                if(node.x === streets[i].coordinates[j].x && node.y === streets[i].coordinates[j].y) return [i, j];         
            }
        }
    }
    function getDistance(node1, node2) {
        return Math.sqrt((node2.x - node1.x)**2 + (node2.y - node1.y)**2);
    }
    function getPath(n, path) {
        if(n.prev) getPath(n.prev, path);
        path.push(n);
        return path;
    }
    function getNeighbours(street, index, current) {
        let n = [];
        if(index > 0) n.push(streets[street].coordinates[index - 1]);
        if(streets[street].coordinates.length - 1 > index) n.push(streets[street].coordinates[index + 1]);
        n.forEach((e, i) => {
            let c = 1;
            while(n[i].x == current.x && n[i].y == current.y) {
                c++;
                n[i] = streets[street].coordinates[index + (!(i % 2) ? -1:1)*c];
            }
        });
        return n;
    }

    let open = [], closed = [], [street, index] = find(start);
    setF(start, start);
    open.push(start);

    while(open.length > 0) {
        const current = open.reduce((prev, cur) => {return cur.f < prev.f ? cur : prev});
        
        [street, index] = find(current);
        closed.push(open.splice(open.indexOf(current), 1)[0]);
        if(current.x === destination.x && current.y === destination.y) return getPath(current, []); 

        let neighbours = getNeighbours(street, index, current);
        
        neighbours.forEach(n => {
            if(closed.indexOf(n) >= 0) return;
            if(open.indexOf(n) === -1 || n.g > current + getDistance(current, n)) {
                try {
                    setF(n, current);
                } catch (err) {
                    console.warn(err, neighbours, current);
                }         
            }
            if(open.indexOf(n) === -1) open.push(n);
        });
    }
}

const res = await fetch("./Extractor/data.json");
const streets = await res.json();
console.log(AStar({x: "-412", y: "-1621"}, {x: "-364",y: "-1639"}, streets) || "failed");
console.log(AStar({x: "-364",y: "-1639"}, {x: "-412", y: "-1621"}, streets) || "failed");
window.streets = streets;

function log(arr) {
    if(arr.length == 0) console.log("empty");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}