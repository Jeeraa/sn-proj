import Log from '../models/log.model.js'

// Add a new log
export const createLog = async (req, res, next) => {
	const { jobId, process, status, updateBy } = req.body

	const newLog = new Log({ jobId, process, status, updateBy })

	try {
		await newLog.save()
		res.status(201).json(newLog)
	} catch (error) {
		next(error)
	}
}

// Get All logs
export const getLog = async (req, res, next) => {
	try {
		const logs = await Log.find({})
		res.status(200).json(logs)
	} catch (error) {
		next(error)
	}
}
