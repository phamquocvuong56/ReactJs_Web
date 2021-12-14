const express = require('express')
const route = require('./routes')
const connect = require('./config/db/connect')
const app = express()
const cors = require('cors')
app.use(cors())
const port = 4000
connect();
app.use(express.json(limit = "50mb"))
route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})