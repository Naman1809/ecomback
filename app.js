
const path = require("path");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const cors = require("cors");
<<<<<<< HEAD
// app.use(cors());


=======
app.use(cors());
>>>>>>> 34df20169466c60cd3757b7ec305db69dbbd0fc1
// COnfig
dotenv.config({ path: "config/config.env" });


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(fileUpload());

// Route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

const corsOptions ={
    origin: [process.env.FRONTEND_URL], 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  }
  app.use(cors(corsOptions));
// console.log(process.env.FRONTEND_URL)
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// Middleware for errors
app.use(errorMiddleware);
module.exports = app;
