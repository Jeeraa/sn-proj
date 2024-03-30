import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { createLog, getLog } from '../controllers/log.controller.js'

const router = express.Router()

router.post('/createLog', verifyToken, createLog)
router.get('/alllogs', verifyToken, getLog)

export default router
