import mongoose from 'mongoose';

const MODEL_NAME = 'engagement';

const EngagementSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'title is required'],
		},
		description: {
			type: String,
			required: [true, 'description is required'],
		},
		carrots: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: false }
);

export default mongoose.models[MODEL_NAME] ||
	mongoose.model(MODEL_NAME, EngagementSchema);
