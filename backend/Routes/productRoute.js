import express from "express";

const route = express.Router()

import addProduct from "../Controller/productController.js";
import upload from "../utils/upload.js";

route.post('/addproduct', upload.array('images', 5), addProduct)

export default route;