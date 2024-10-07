import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import DBConn from './utils/DBCon.js'

import productRoute from './Routes/productRoute.js'
import categoryRoute from './Routes/categoryRoute.js'

const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello world')
})

app.use("/api", productRoute)
app.use("/api", categoryRoute)


// Database connection
DBConn();

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})