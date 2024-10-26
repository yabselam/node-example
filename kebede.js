console.log(__filename);
console.log(__dirname);

const path = require("path");
//consol.log(path);

let pathObj = path.parse(__filename);
console.log(pathObj);

const os = require("os");
