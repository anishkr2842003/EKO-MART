import express from "express";
import { addtoCart, showCart, updateCart } from "../Controller/cartController.js";

const route = express.Router()

route.post('/addtocart', addtoCart)
route.post('/showcart', showCart)
route.post('/updatecart', updateCart)

export default route;