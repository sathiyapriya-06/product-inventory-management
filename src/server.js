
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Database Connected"))
.catch(()=> console.log("DB Connection Error"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);

app.get("/",(req,res)=>{
res.send("Inventory API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log("Server running on PORT",PORT);
});
