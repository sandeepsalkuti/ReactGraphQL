const express = require("express");
//require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");
const schema = require("./schema/schema.js");
const connectDB = require("./schema/config/db.js");
const cors = require("cors");

const app = express();
connectDB();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
const port = process.env.PORT || 4000;
app.listen(port, console.log(`server running on port ${port}`));
