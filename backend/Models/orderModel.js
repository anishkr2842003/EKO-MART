import mongoose from 'mongoose'
import items from 'razorpay/dist/types/items'

const {Schema} = mongoose

const orderSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [
        {
            productId : {type: mongoose.Schema.Types.ObjectId},
            quantity : {type: Number}
        }
    ],
    totalAmount: {
        type: Number,
    },
    paymentId: {
        type: String
    },
    receipt: {
        type: String
    },
    status: {
        type: String,
        enum: ['created', 'failed', 'paid'],
        default: 'created'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const orderModel = mongoose.model('Order', orderSchema)

export default orderModel