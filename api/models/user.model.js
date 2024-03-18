import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		profilePicture: {
			type: String,
			default:
				'https://www.flaticon.com/free-icon/user_149071?term=profile&page=1&position=11&origin=search&related_id=149071',
		},
	},
	{ timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User
