const express = require('express')
const app = express()
const ProductRoute = require('./routes/product.route')

const mongoose = require('mongoose')

app.use(express.json())

//para usar body como form
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.send('Hello of node t');
})

app.use("/api/products", ProductRoute)

mongoose.connect(
    'mongodb+srv://admin:XnFgzz61NAcyfEqp@cluster0.2o5jz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)
.then(() => {
    console.log('connect to database')
    app.listen(3000, () => {
        console.log('server run port 3000')
    })
})
.catch((reason) => {
    console.log('fail to connect')
})



