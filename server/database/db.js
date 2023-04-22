import mongoose from "mongoose";

const connection=async(USERNAME,PASSWORD)=>{
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-website.hhh1zrm.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{
            useNewUrlParser:true,
        })
        console.log('successfully connected to database');
    }catch(e){
        console.log('error while connecting to database',e.message);
    }
}

export default connection;

