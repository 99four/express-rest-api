var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FootballerSchema   = new Schema({
	name: String
});

module.exports = mongoose.model('Footballer', FootballerSchema);