var mongoose = require('mongoose');
var imageSchema = new mongoose.Schema({
	name: String,
	desc: String,
    price: Number,
	img:
	{
		data: Buffer,
		contentType: String
	}
});

module.exports = mongoose.model('Image', imageSchema);
