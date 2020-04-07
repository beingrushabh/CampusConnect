const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {dbName: 'test' , useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log(`MongoDB database connection established successfully`);
})

const eventRouter = require('./routes/Event');
const ClubComRouter = require('./routes/ClubCom');
const ComplaintRouter = require('./routes/Complaint');
const CompanyRouter = require('./routes/Company');
const CProfileRouter = require('./routes/CProfile');
const NewsRouter = require('./routes/News');
const CommentRouter = require('./routes/Comment');
const UserRouter = require('./routes/User');


app.use('/Event', eventRouter);
app.use('/ClubCom', ClubComRouter);
app.use('/Complaint',ComplaintRouter);
app.use('/Company',CompanyRouter);
app.use('/CProfile',CProfileRouter);
app.use('/News',NewsRouter);
app.use('/Comment',CommentRouter);
app.use('/User',UserRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});