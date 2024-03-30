import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true},
		lastname: { type: String, required: true},
		email: { type: String, required: true},
		role: { type: String, required: true},
		username: { type: String, required: true},
		password: { type: String, required: true },
		profilePicture: {
			type: String,
			default:
				'https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png',
		},
	},
	{ timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User
