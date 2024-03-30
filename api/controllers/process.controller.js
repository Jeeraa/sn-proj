import Process from '../models/process.model.js'

// Add a new Process
export const createProcess = async (req, res, next) => {
	const { jobId, processes } = req.body

	const newProcess = new Process({
		jobId,
		processes,
	})

	try {
		await newProcess.save()
		res.status(201).json(newProcess)
	} catch (error) {
		next(error)
	}
}

// Get All Process
export const getProcess = async (req, res, next) => {
	try {
		const processes = await Process.find({})
		res.status(200).json(processes)
	} catch (error) {
		next(error)
	}
}

// Get Process details
export const getProcessById = async (req, res, next) => {
	try {
		const processId = req.params.id
		const process = await Process.findById(processId)

		if (!process) {
			return res.status(404).json({ message: 'process not found' })
		}

		res.status(200).json(process)
	} catch (error) {
		next(error)
	}
}

// Update process
export const updateProcess = async (req, res, next) => {
	try {
		const updatedProcess = await Process.findByIdAndUpdate(
			req.params.id,
			{
				$set: {
					jobId: req.body.jobId,
					processes: req.body.processes,
				},
			},
			{ new: true }
		)
		res.status(200).json(updatedProcess)
	} catch (error) {
		next(error)
	}
}

// Delete a process
export const deleteProcess = async (req, res, next) => {
	try {
		await Process.findByIdAndDelete(req.params.id)
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
