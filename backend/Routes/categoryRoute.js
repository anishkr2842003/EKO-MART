import express from "express";
import { addCategory, allCategory } from "../Controller/categoryController.js";
import uploadCategory from '../utils/uploadCategory.js'

const route = express.Router()

route.post('/addcategory', uploadCategory.single('image'),addCategory)
route.get('/allcategory', allCategory)

export default route;