const express = require("express"),
mongoose = require("mongoose"),
dotenv = require("dotenv")
pinRouter = require("./routes/pins"),
userRouter = require("./routes/users")

app = express();


//middleware para parsear las requests
app.use(express.json())

//configurar el archivo de secretos
dotenv.config();

//esto es lo que va como secret para que no se suba  a github
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(()=>{
  console.log("MongoDB connected")
}).catch(err=>console.log(err));

app.use("/api/pins",pinRouter)
app.use("/api/users",userRouter)


app.listen(8000,()=>{
  console.log("Backend server is running")
})
