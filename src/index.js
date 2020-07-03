const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./User');


const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/ConsultantStudentProject";

(async () => {

  await mongoose.connect(DB_URL);

  console.log('connected to db');

  const app = express();

  app.use(morgan('tiny'));
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/", async (req, res) => {
    const query = req.query.q;

    if (!query || query == "n/a") return res.status(300).send('NOOOO!');
    // for faculty

    const regex = new RegExp(query, "i");
    console.log(regex);
    const fusers = await User.find({ $or: [{ faculty: { $regex: regex } }, { department: { $regex: regex } }] });

    return res.send(fusers);

  });

  const port = 3003

  app.listen(port, () => console.log('Port', port, "listening"));

})()
