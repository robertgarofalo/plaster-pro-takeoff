// POST new job

import { connectToDB } from "@/utils/database";
import Job from "@/models/job";

export const POST = async (req, res) => {
    const {AccountNo, ClientName, JobDetails, DeliveryAddress, TakeOff} = await req.json()

    try {
        await connectToDB()

        const newJob = new Job({
            AccountNo,
            ClientName,
            JobDetails,
            DeliveryAddress: {
                LotUnit: DeliveryAddress.LotUnit,
                StreetAddress: DeliveryAddress.StreetAddress,
                Suburb: DeliveryAddress.Suburb,
                State: DeliveryAddress.State,
                Postcode: DeliveryAddress.Postcode,
                Country: DeliveryAddress.Country
            },
            TakeOff: TakeOff
        })

        await newJob.save()
        
        return new Response(JSON.stringify(newJob), { 
            status: 201
        })
    } catch (error) {
        return new Response('Failed to create a new Job.')
    }
}