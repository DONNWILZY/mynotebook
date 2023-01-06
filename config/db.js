const mongoose = require ('mongoose');

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlparser: true,
            useUnifiedTopology: true,
            useFindAndModify: false

        })

        console.log(`mongodb concted ${conn.connection.host}`)
    } catch(err){
        console.err(err)
        process.exit(1)
    }
}