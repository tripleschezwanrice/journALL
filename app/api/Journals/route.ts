import { NextResponse } from "next/server";

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.


export async function GET(request:Request){

    const uri = process.env.CONNECTION_STRING;
    const client = new MongoClient(uri);
    try {
        const database = client.db('journALL');
        const journals = database.collection('journals');
        // Query for a movie that has the title 'Back to the Future'
        const query = {};
        const journal = await journals.find(query).toArray();
        console.log(journal);
        return NextResponse.json(journal)
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

}



export async function POST(request:Request){
  
    let body = await request.json()
    console.log(body)
    const uri = process.env.CONNECTION_STRING;
    const client = new MongoClient(uri);
    try {
        const database = client.db('journALL');
        const journals = database.collection('journals');
        // Query for a movie that has the title 'Back to the Future'
        const newJournal = await journals.insertOne(body);
        return NextResponse.json({newJournal, ok:true})
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}