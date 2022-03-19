import mongoose from 'mongoose';

const MODEL_NAME = 'engagements';

const EngagementsSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'title is required'],
			unique: [true, 'title has to be unique'],
		},
		description: {
			type: String,
			required: [true, 'description is required'],
			unique: [true, 'description has to be unique'],
		},
		carrots: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: false }
);

export default mongoose.models[MODEL_NAME] ||
	mongoose.model(MODEL_NAME, EngagementsSchema);
