import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import {
	createProcess,
	deleteProcess,
	getProcess,
	getProcessById,
	updateProcess,
} from '../controllers/process.controller.js'

const router = express.Router()

router.post('/createprocess', verifyToken, createProcess)
router.get('/allprocess', verifyToken, getProcess)
router.get('/allprocess/:id', verifyToken, getProcessById)
router.post('/updateprocess/:id', verifyToken, updateProcess)
router.delete('/deleteprocess/:id', verifyToken, deleteProcess)
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
