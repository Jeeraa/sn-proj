import mongoose from 'mongoose'

const logSchema = new mongoose.Schema(
	{
		jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
		process: { type: String },
		status: { type: String },
		updateBy: { type: String },
	},
	{ timestamps: true }
)

const Log = mongoose.model('Log', logSchema)

export default Log
