const res = await fetch("./Extractor/data.json");
const streets = await res.json();
const destination = {"x": "-364","y": "-1639"};

console.log(streets);
