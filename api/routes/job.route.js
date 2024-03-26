import express from 'express'
import {
	createJob,
	updateJob,
	getJob,
	getJobById,
	deleteJob,
} from '../controllers/job.controller.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

router.post('/createJob', verifyToken, createJob)
router.get('/alljobs', verifyToken, getJob)
router.get('/alljobs/:id', verifyToken, getJobById)
router.post('/updatejob/:id', verifyToken, updateJob)
router.delete('/deletejob/:id', verifyToken, deleteJob)
// router.put('/:jobId/work-step/:workStepId', verifyToken, updateWorkStepStatus)

// // Create a new job
// router.post('/', verifyToken, createJob)

// // Update job details
// router.put('/:id', verifyToken, updateJob)

// // Update work step status
// router.put('/:id/status', verifyToken, updateWorkStepStatus)

// // Get job details
// router.get('/:id', verifyToken, getJob)

// // Delete a job
// router.delete('/:id', verifyToken, deleteJob)

export default router
