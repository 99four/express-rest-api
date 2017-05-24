var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FootballerSchema   = new Schema({
	firstName: String,
	lastName: String,
	country: String,
	club: String,
});

module.exports = mongoose.model('Footballer', FootballerSchema);