import User from '../models/user.model.js'
import { errorHandler } from '../utils/error.js'
import bcryptjs from 'bcryptjs'

export const test = (req, res) => {
	res.json({
		message: 'API is working!',
	})
}

export const updateUser = async (req, res, next) => {
	// if (req.user.id !== req.params.id) {
	// 	return next(errorHandler(401, 'You can update only your account!'))
	// }
	try {
		if (req.body.password) {
			req.body.password = bcryptjs.hashSync(req.body.password, 10)
		}
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: {
					name: req.body.name,
					lastname: req.body.lastname,
					email: req.body.email,
					role: req.body.role,
					username: req.body.username,
					password: req.body.password,
					profilePicture: req.body.profilePicture,
				},
			},
			{ new: true }
		)
		const { password, ...rest } = updatedUser._doc
		res.status(200).json(rest)
	} catch (error) {
		next(error)
	}
}

export const deleteUser = async (req, res, next) => {
	// if (req.user.id !== req.params.id) {
	// 	return next(errorHandler(401, 'You can update only your account!'))
	// }
	try {
		await User.findByIdAndDelete(req.params.id)
		res.status(200).json('User has been deleted...')
	} catch (error) {
		next(error)
	}
}

export const getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find({})
		res.status(200).json(users)
	} catch (error) {
		next(error)
	}
}

export const getUserById = async (req, res, next) => {
	try {
		const userId = req.params.id
		const user = await User.findById(userId)

		if (!user) {
			return res.status(404).json({ message: 'User not found' })
		}

		res.status(200).json(user)
	} catch (error) {
		next(error)
	}
}
