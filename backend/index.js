import express from 'express'
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config'
import DBConn from './utils/DBCon.js'


import productRoute from './Routes/productRoute.js'
import categoryRoute from './Routes/categoryRoute.js'

const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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