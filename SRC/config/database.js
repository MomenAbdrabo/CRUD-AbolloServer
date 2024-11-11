import mongoose from "mongoose";

export const connectionDB = async () => {

    return await mongoose.connect('mongodb://localhost:27017/abolloServer')
        .then(result => { console.log("connection dataBase done ") })
        .catch(err => { console.log(`connection field......${err} `) })

}