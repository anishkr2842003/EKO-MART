import productModel from "../Models/productModel.js";

export const addProduct = async(req,res)=>{
    try {
        const {title,description,originalprice,sellingprice,category,brandname,weight} = req.body
        const images = req.files.map(file => file.filename);
        const newProduct = new productModel({title,images,description,originalprice,sellingprice,category,brandname,weight})
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

// export default {addProduct, allProducts};