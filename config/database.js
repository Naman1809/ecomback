const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://namankukreja01:mIMLYIxJEIXoYo89@cluster0.idk2n9q.mongodb.net/MarketLink?retryWrites=true&w=majority";
<<<<<<< HEAD

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI);
    // console.log(MONGO_URI)
    console.log(`Mongo connected: on port ${process.env.JWT_EXPIRE}`, connect.connection.host);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

=======
  
  const connectDatabase = async () => {
    try {
        const connect = await mongoose.connect(MONGO_URI);
        // console.log(MONGO_URI)
        console.log('Mongo connected:', connect.connection.host);
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

>>>>>>> 34df20169466c60cd3757b7ec305db69dbbd0fc1
module.exports = connectDatabase;
