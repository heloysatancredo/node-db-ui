const mysql = require('mysql')



//Cpre Modules Node
const path = require('path');

//NPM Node Modules
const express = require('express');

//Custom Node Modules

const app = express();

const pubDirPath = path.join(__dirname, '../public')

app.use(express.static(pubDirPath))

app.get('/test', (req, res) => {
    const con = mysql.createConnection({
        host: 'test4.wmdd.ca', //do not modify or delete, it's just for testing SELECT
        database: 'test4_4920',
        user: 'db-user-t4',
        password: 'wmdd_4920@uzr'
    })

    let parameter1 = req.query.tst1;

    let q = `SELECT firstName, lastName, emailAddr FROM customer, email WHERE customer.custID = email.custID AND customer.custID = ${parameter1}`

    con.query(q, (err, result) => {
        if (err) { throw err }
        console.log(result)
        res.json(result)
    })
    con.end()

})



// let q2 = 'SELECT * FROM customer WHERE custID = 18'



// con.query(q2, (err, res) => {
//     if (err) { throw err }

//     //console.log(res)
//     //console.log(res[0].NumCusts) // same result as last one
//     console.log(res)
// })





// Terminal commands
// npm i mysql (if it's not installed yet)
// npm init -y
// node src/app.js

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})