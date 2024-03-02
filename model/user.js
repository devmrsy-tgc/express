import mongoose from 'mongoose';

var userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},

		email: {
			type: String,
			required: true,
		},

		password: {
			type: String,
			required: true,
		},

		mobileNumber: {
			type: Number,
			required: true,
		},

		userName: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

//Export the model
export const userModel = mongoose.model('users', userSchema);
