import { Schema, model, models } from 'mongoose'

const JobSchema = new Schema({
    AccountNo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    TakeoffDate: {
        type: Date
    },
    TakeoffTime: {
        type: String
    },
    ClientName: {
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
    JobDetails: {
        type: String
    },
    TakeOff: [{
        roomName: String,
        roomHeight: String
    }]
    
})

const Job = models.Job || model('Job', JobSchema)

export default Job

