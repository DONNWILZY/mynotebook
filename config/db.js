const mongoose = require ('mongoose');

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL || mongoose.connect('mongodb://127.0.0.1:27017/member'), {
            useNewUrlparser: true,
            useUnifiedTopology: true,
            useFindAndModify: false

        })

        console.log(`mongodb concted ${conn.connection.host}`)
    } catch(err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB