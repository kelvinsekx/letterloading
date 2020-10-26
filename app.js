const express = require("express")
const sekxapp = express()
const port = 3838


// sekxapp.get('/', (req, res)=>{
//     res.writeHead(200, {'Content-type': 'text/html'})
//     res.sendFile(`${__dirname}/index.html`)
// })
sekxapp.use(express.static(`${__dirname}/`))

sekxapp.listen(port, ()=>{
    console.log(`Hey, your app running on localhost/${port}`)
})


