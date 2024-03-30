import User from '../models/user.model.js'
// import { errorHandler } from '../utils/error.js'
import Job from '../models/job.model.js'

// const processes = [
// 	{
// 		process: 'การประมูล',
// 		allowedRoles: ['แอดมิน', 'ผู้บริหาร', 'ฝ่ายขาย'],
// 		status: '',
// 	},
// 	{
// 		process: 'การเซ็นสัญญา',
// 		allowedRoles: ['แอดมิน', 'ผู้บริหาร', 'ฝ่ายขาย'],
// 		status: '',
// 	},
// 	{
// 		process: 'การสั่งซื้อ',
// 		allowedRoles: ['แอดมิน', 'ผู้บริหาร', 'ฝ่ายบัญชี'],
// 		status: '',
// 	},
// 	{
// 		process: 'การส่งมอบ',
// 		allowedRoles: ['แอดมิน', 'ผู้บริหาร', 'ฝ่ายขาย'],
// 		status: '',
// 	},
// 	{
// 		process: 'การชำระเงิน',
// 		allowedRoles: ['แอดมิน', 'ผู้บริหาร', 'ฝ่ายบัญชี'],
// 		status: '',
// 	},
// ]

// Add a new job
export const createJob = async (req, res, next) => {
	const {
		title,
		company,
		companyType,
		description,
		budget,
		profit,
		dueDate,
	} = req.body

	const newJob = new Job({
		title,
		company,
		companyType,
		description,
		budget,
		profit,
		dueDate,
	})

	try {
		await newJob.save()
		res.status(201).json(newJob)
	} catch (error) {
		next(error)
	}
}

// Get All Jobs
export const getJob = async (req, res, next) => {
	try {
		const jobs = await Job.find({})
		res.status(200).json(jobs)
	} catch (error) {
		next(error)
	}
}

// Get job details
export const getJobById = async (req, res, next) => {
	try {
		const jobId = req.params.id
		const job = await Job.findById(jobId)

		if (!job) {
			return res.status(404).json({ message: 'Job not found' })
		}

		res.status(200).json(job)
	} catch (error) {
		next(error)
	}
}

// Update job
export const updateJob = async (req, res, next) => {
	try {
		const updatedJob = await Job.findByIdAndUpdate(
			req.params.id,
			{
				$set: {
					title: req.body.title,
					company: req.body.company,
					companyType: req.body.companyType,
					description: req.body.description,
					budget: req.body.budget,
					profit: req.body.profit,
					dueDate: req.body.dueDate,
				},
			},
			{ new: true }
		)
		res.status(200).json(updatedJob)
	} catch (error) {
		next(error)
	}
}

// Delete a job
export const deleteJob = async (req, res, next) => {
	try {
		await Job.findByIdAndDelete(req.params.id)
		res.status(200).json('Job has been deleted...')
	} catch (error) {
		next(error)
	}
}

// // Update work step status
// export const updateWorkStepStatus = async (req, res) => {
// 	try {
// 		const job = await Job.findById(req.params.id)
// 		const workStep = job.status.find((step) => step.process === req.body.process)

// 		if (workStep) {
// 			// Check if the user's role is allowed to update this process
// 			if (workStep.allowedRoles.includes(req.user.role)) {
// 				workStep.status = req.body.status
// 				workStep.updatedAt = new Date()
// 				workStep.updatedBy = req.user._id
// 			} else {
// 				return res
// 					.status(403)
// 					.json({ error: 'You are not authorized to update this process' })
// 			}
// 		} else {
// 			// Create a new work step entry
// 			job.status.push({
// 				process: req.body.process,
// 				allowedRoles: req.body.allowedRoles,
// 				updatedAt: new Date(),
// 				updatedBy: req.user._id,
// 				status: req.body.status,
// 			})
// 		}

// 		const updatedJob = await job.save()
// 		res.status(200).json(updatedJob)
// 	} catch (error) {
// 		res.status(500).json({ error: error.message })
// 	}
// }
