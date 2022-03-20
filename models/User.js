import mongoose from 'mongoose';

const MODEL_NAME = 'users';

const UserSchema = new mongoose.Schema(
	{
		firstname: {
			type: String,
			required: [true, 'firstname is required'],
		},
		lastname: {
			type: String,
			required: [true, 'lastname is required'],
		},
		email: {
			type: String,
			required: [true, 'E-Mail is required'],
			unique: [true, 'E-Mail has to be unique'],
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
		},
		carrots: {
			type: Number,
			default: 0,
		},
		department: {
			type: String,
		},
	},
	{ timestamps: false }
);

export default mongoose.models[MODEL_NAME] ||
	mongoose.model(MODEL_NAME, UserSchema);
