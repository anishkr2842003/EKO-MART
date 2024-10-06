import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    originalprice:{
        type: Number,
        required: true
    },
    sellingprice:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    brandname:{
        type: String,
        required: true
    },
    weight:{
        type: String,
        required: true
    }
})

const productModel = mongoose.model('Product', ProductSchema)

export default productModel;