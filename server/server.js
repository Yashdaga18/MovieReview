// const express = require("express");
// const mongoose = require("mongoose");
// const routes = require("./routes");
// const app = express();
// const PORT =  3001;
// const cors = require("cors")
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static("client/build"));
// // }
// app.use(cors())
// app.use(routes);
// const mongodburl="mongodb://localhost:27017/rajwa";
// mongoose.Promise = Promise;
// mongoose.connect(mongodburl,
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// app.listen(PORT, function () {
//   console.log(`=> API Server now listening on PORT ${PORT}!`);
// });


const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = 3001;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

const mongodburl = 'mongodb+srv://yashdagasit22:zqwEugdo0EirzJnP@cluster0.twosv3b.mongodb.net/?retryWrites=true&w=majority';

// Use an async function to establish the MongoDB connection
async function connectToDatabase() {
  try {
    await mongoose.connect(mongodburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("=> MongoDB connected successfully!");
  } catch (error) {
    console.error("=> Error connecting to MongoDB:", error);
    // Handle the error appropriately (e.g., exit the application)
    process.exit(1);
  }
}

// Call the async function to connect to MongoDB before starting the server
async function startServer() {
  await connectToDatabase();

  app.listen(PORT, function () {
    console.log(`=> API Server now listening on PORT ${PORT}!`);
  });
}

startServer();
