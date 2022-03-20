import mongoose from 'mongoose';

const MODEL_NAME = 'users';

const UserSchema = new mongoose.Schema(
	{
		firstname: {
			type: String,
			required: [true, 'firstname is required'],
			unique: [true, 'firstname has to be unique'],
		},
		lastname: {
			type: String,
			required: [true, 'lastname is required'],
			unique: [true, 'lastname has to be unique'],
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
