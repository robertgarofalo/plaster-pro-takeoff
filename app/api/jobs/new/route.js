// POST new job

import { connectToDB } from "@/utils/database";
import Job from "@/models/job";

export const POST = async (req, res) => {
    const {jobDetails, takeOff } = await req.json()

    try {
        await connectToDB()

        const newJob = new Job({
            jobDetails,
            takeOff
        })

        await newJob.save()
        
        return new Response(JSON.stringify(newJob), { 
            status: 201
        })
    } catch (error) {
        return new Response('Failed to create a new Job.')
    }
}