import { Schema, model, models } from 'mongoose'

const JobSchema = new Schema({
    AccountNo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    ClientName: String,
    DeliveryAddress: {
        LotUnit: String,
        StreetAddress: String,
        Suburb: String,
        State: String,
        Postcode: String,
        Country: String
    },
    JobDetails: String,
    TakeOff: [{
        roomName: String,
        roomHeight: Number
    }]
}, 
    {timestamps: true}
)

const Job = models.Job || model('Job', JobSchema)

export default Job

