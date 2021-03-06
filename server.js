const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const morgan     = require('morgan');
const mongoose   = require('mongoose');
const port       = process.env.PORT || 3000;
const cors 		 = require('cors');

const corsOptions = {
  origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open');
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connect('mongodb://localhost:27017/footballers');

// REGISTER OUR ROUTES -------------------------------
app.use('/api/footballers', require('./routes/footballers'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
