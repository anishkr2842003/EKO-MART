import mongoose from "mongoose";
import productModel from "../Models/productModel.js";
import fs from 'fs';
import path from 'path';

export const addProduct = async(req,res)=>{
    try {
        const {title,description,originalprice,sellingprice,discount,category,brandname,weight,type} = req.body
        const images = req.files.map(file => file.filename);
        const newProduct = new productModel({title,images,description,originalprice,sellingprice,discount,category,brandname,weight,type})
        await newProduct.save()
        res.status(200).json({message:"New prodect added", newProduct})
    } catch (error) {
        res.status(500).json({message: "Product is not added"})
        console.log(error)
    }
}

export const allProducts = async(req,res)=>{
    try {
        const allproducts = await productModel.find();
        res.status(200).json({message: "All product fetched", products: allproducts})
        // console.log(allproducts)
    } catch (error) {
        res.status(500).json({message: "Products fetching problem"})
    }
}

export const singleProduct = async(req,res)=>{
    const { id } = req.params;
    // const {id} = req.query;
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(400).json({ message: "Invalid product ID format" });
    // }
    try {
        const singleProduct = await productModel.findOne({_id: id})
        res.status(200).json({message: "Single product fetched", singleProduct: singleProduct})
    } catch (error) {
        res.status(500).json({message: "Single products fetching problem"})
    }
}

export const deleteProduct = async(req,res)=>{
    const {id} = req.params;

    try {
        const product = await productModel.findOne({_id: id})
        const images = product.images;
        await productModel.deleteOne({_id: id})

        images.forEach((image)=>{
            const filePath = path.join(process.cwd(), 'uploads/products', image);
            fs.unlink(filePath, (err) => {
                if (err) console.log(`Error deleting image: ${image}`, err);
              });
        })
        res.status(200).json({message: "Product deleted successfully"})
    } catch (error) {
        res.status(500).json({message: "Problem in delete product"})
    }
}


// export default {addProduct, allProducts};