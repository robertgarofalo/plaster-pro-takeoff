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

/*

import { Schema, model, models } from 'mongoose'

const JobSchema = new Schema({
    PlaceOrder: {
        type: Boolean,
    },
    PoReference: {
        type: String,
        required: [true, 'Reference is required.'],
        // 35 character limit
    },
    AccountNo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    ProjectPricing: {
        type: String,
    },
    BusinessName: {
        type: String,
    },
    ContactName: {
        type: String,
    },
    ContactNumber: {
        type: String,
    },
    BuilderName: {
        type: String,
    },
    Type: { // delivery or pickup?
        type: String,
    },
    Date: {
        type: Date
    },
    Time: {
        type: String
    },
    DeliveryAddress: [{
        LotUnit: String,
        StreetAddress: String,
        Suburb: String,
        State: String,
        Postcode: Number,
        Country: String
    }],
    DeliveryTypeCode: String,
    DeliveryNotifications: String,
    PlantId: String,
    Notes: String,
    Items: [{
        Code: String,
        Quantity: Number,
        PoItemNo: String

    }]

})

const Job = models.Job || model('Job', JobSchema)

export default Job



*/