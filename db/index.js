const fs = require ("fs");
const pool = require("../config.js")

const data = fs.readFileSync("./seeding.sql", "utf-8")
console.log(data)

pool.query(data, (err, result) => {
    if (err) throw err
    console.log("seeding successfully")
})
