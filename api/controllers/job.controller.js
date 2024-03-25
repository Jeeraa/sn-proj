import User from '../models/user.model.js'
import { errorHandler } from '../utils/error.js'
import bcryptjs from 'bcryptjs'
import Job from '../models/job.model.js'

// Add a new job
export const createJob = async (req, res) => {
	try {
		const job = await Job.create(req.body)
		res.status(201).json(job)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

// Update job details
export const updateJob = async (req, res) => {
	try {
		const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
		res.status(200).json(job)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

// Update work step status
export const updateWorkStepStatus = async (req, res) => {
	try {
		const job = await Job.findById(req.params.id)
		const workStep = job.status.find((step) => step.process === req.body.process)

		if (workStep) {
			// Check if the user's role is allowed to update this process
			if (workStep.allowedRoles.includes(req.user.role)) {
				workStep.status = req.body.status
				workStep.updatedAt = new Date()
				workStep.updatedBy = req.user._id
			} else {
				return res
					.status(403)
					.json({ error: 'You are not authorized to update this process' })
			}
		} else {
			// Create a new work step entry
			job.status.push({
				process: req.body.process,
				allowedRoles: req.body.allowedRoles,
				updatedAt: new Date(),
				updatedBy: req.user._id,
				status: req.body.status,
			})
		}

		const updatedJob = await job.save()
		res.status(200).json(updatedJob)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

// Get job details
export const getJob = async (req, res) => {
	try {
		const job = await Job.findById(req.params.id).populate(
			'status.updatedBy',
			'name lastname'
		)
		res.status(200).json(job)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

// Delete a job
export const deleteJob = async (req, res) => {
	try {
		const job = await Job.findByIdAndDelete(req.params.id)
		if (!job) {
			return res.status(404).json({ error: 'Job not found' })
		}
		res.status(200).json({ message: 'Job deleted successfully' })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const deleteUser = async (req, res, next) => {
	if (req.user.id !== req.params.id) {
		return next(errorHandler(401, 'You can update only your account!'))
	}
	try {
		await User.findByIdAndDelete(req.params.id)
		res.status(200).json('User has been deleted...')
	} catch (error) {
		next(error)
	}
}
