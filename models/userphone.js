var mongoose = require('mongoose'); //grab mongoose module
var Schema = mongoose.Schema; //grab Schema object

//create user phone schema
var UserphoneSchema = new Schema({
	name: String,
	make: String,
	year: Number
});

//export
module.exports = mongoose.model('Userphone', UserphoneSchema);