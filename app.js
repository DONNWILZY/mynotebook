const express = require('express');
const dotevn = require('dotenv');

//load config
dotevn.config({ path: './config/config.env'})

const app = express();

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log(`PORT ${PORT} is active || 127.00.1/${PORT}`))