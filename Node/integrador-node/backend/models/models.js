import mongoose from 'mongoose';

const votesSchema = new mongoose.Schema({
	ticker: {
		type: String,
		required: true,
	},
	targetPrices: {
		shortTerm: Number,
		midTerm: Number,
		longTerm: Number,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Votes = mongoose.model('Votes', votesSchema);

export default Votes;
