import categoryModel from "../Models/categoryModel.js";
import fs from 'fs';
import path from 'path';

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

export const deleteCategory = async(req,res)=>{
    const {id} = req.params
    try {
        const category = await categoryModel.findOne({_id: id});
        const image = category.image;
        await categoryModel.deleteOne({_id: id})
        const filepath = path.join(process.cwd(),'uploads/category', image)
        fs.unlink(filepath, (err)=> console.log(`Error in deleting category image`))
        res.status(200).json({message: 'Category deleted successfully'})
    } catch (error) {
        res.status(500).json({message: "Problem in delete category"})
    }
}