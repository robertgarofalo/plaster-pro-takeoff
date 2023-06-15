import { Schema, model, models } from 'mongoose'

const OrderSchema = new Schema({
    // creator: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    // },
    order: {
        type: String,
        required: [true, 'Order is required.'],
    },
    // tag: {
    //     type: String,
    //     required: [true, 'Tag is required.']
    // }
})

const Order = models.Order || model('Order', OrderSchema)

export default Order