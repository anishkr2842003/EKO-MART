import categoryModel from "../Models/categoryModel.js";

export const addCategory = async(req,res)=>{
    try {
        const {catname,stocks,description} = req.body
        const image = req.file.filename;
        const newCategory = new categoryModel({catname,image,stocks,description})
        await newCategory.save()
        res.status(200).json({message: 'New category added', newCategory})
    } catch (error) {
        res.status(500).json({message: "Category not added", error})
    }
}

export const allCategory = async(req,res)=>{
    try {
        const categories = await categoryModel.find()
        res.status(200).json({message: "Category fetched", categories})
    } catch (error) {
        res.status(500).json({message: "Category not fetched", error})
    }
}