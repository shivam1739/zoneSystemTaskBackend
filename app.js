const express = require("express");
const db = require("./models/index");
require("dotenv").config();
const zoneRoutes = require("./routes/zone.routes");

const app = express();
app.use(express.json());
zoneRoutes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await db.sequelize.sync(); // this to sync all the models (it will create the through table User_Roles in db)
  console.log("server is listening to port: ", PORT);
});
