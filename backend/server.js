const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authrout");

const app = express();
/****************************************************** */
const URI =
  "mongodb+srv://Aravind:Aravind@mongo@cluster0-zdpsw.mongodb.net/blogger?retryWrites=true&w=majority";
port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/auth", authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

/*****************************DBCONNECTION********************************** */
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected succesfully"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`listning at port ${port}`));
