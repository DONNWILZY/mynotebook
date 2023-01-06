const mongoose = require ('mongoose');
mongoose.set('strictQuery', false);
const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlparser: true,
            useUnifiedTopology: true
           // useFindAndModify: false

        })

        console.log(`mongodb concted ${conn.connection.host}`)
    } catch(err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB