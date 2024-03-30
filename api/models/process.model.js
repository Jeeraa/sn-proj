import mongoose from 'mongoose'

const processSchema = new mongoose.Schema(
	{
		jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
		// jobId: { type: String },
		processes: [
			{
				process: { type: String },
				allowedRoles: [{ type: String }],
				status: { type: String },
			},
			{
				process: { type: String },
				allowedRoles: [{ type: String }],
				status: { type: String },
			},
			{
				process: { type: String },
				allowedRoles: [{ type: String }],
				status: { type: String },
			},
			{
				process: { type: String },
				allowedRoles: [{ type: String }],
				status: { type: String },
			},
			{
				process: { type: String },
				allowedRoles: [{ type: String }],
				status: { type: String },
			},
		],
	},
	{ timestamps: true }
)

const Process = mongoose.model('Process', processSchema)
export default Process
