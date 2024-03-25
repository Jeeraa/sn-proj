import express from 'express'
import {
	createJob,
	updateJob,
	updateWorkStepStatus,
	getJob,
	deleteJob,
} from '../controllers/job.controller.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

// Create a new job
router.post('/', verifyToken, createJob)

// Update job details
router.put('/:id', verifyToken, updateJob)

// Update work step status
router.put('/:id/status', verifyToken, updateWorkStepStatus)

// Get job details
router.get('/:id', verifyToken, getJob)

// Delete a job
router.delete('/:id', verifyToken, deleteJob)

export default router
