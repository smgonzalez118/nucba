import mongoose from 'mongoose';

const votesSchema = new mongoose.Schema({
	ticker: {
		type: String,
		required: true,
	},
	targetPriceST: Number,
	targetPriceMT: Number,
	targetPriceLT: Number,
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Vote = mongoose.model('Vote', votesSchema);

export default Vote;
