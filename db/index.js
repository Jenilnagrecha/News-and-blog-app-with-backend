const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/fs-blog")
  .then(()=>console.log("Connected to database" ))
  .catch((err) =>
    console.log("Error connecting to database", err.message || err)
  );
