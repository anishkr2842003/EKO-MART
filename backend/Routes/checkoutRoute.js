import express from 'express'
import { createOrder } from '../Controller/checkoutController.js'

const route = express.Router()


route.post('/createorder', createOrder);
route.get('/hello', async(req,res)=>{
    res.status(200).json({messgae: 'hello route'})
});

export default route;
