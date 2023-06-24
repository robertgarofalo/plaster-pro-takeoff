import { Schema, model, models } from 'mongoose'

const JobSchema = new Schema({
    AccountNo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    ClientName: {
        type: String
    },
    DeliveryAddress: {
        LotUnit: Number,
        StreetAddress: String,
        Suburb: String,
        State: String,
        Postcode: Number,
        Country: String
    },
    JobDetails: {
        type: String
    },
    // TakeOff: [{
    //     roomName: String,
    //     roomHeight: String
    // }]
}, {timestamps: true})

const Job = models.Job || model('Job', JobSchema)

export default Job

