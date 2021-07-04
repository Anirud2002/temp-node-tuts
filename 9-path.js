const path = require("path")

const filePath = path.join("/content", "subfolder", "hey.txt")

console.log(filePath)

const baseName = path.basename(filePath)
console.log(baseName)

const absolute = path.resolve(__dirname, "content", "subfolder", "hey.txt")
console.log(absolute, path.basename(absolute), __dirname)

