require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

console.log("\x1b[35mniger \x1b[0m")

app.use('api/v1/flights', )
app.use('api/v1/users')
app.use('api/v1/tickets')




app.listen(process.env.PORT, ()=>{
    console.log(`alive at PORT ${process.env.PORT} `)
})