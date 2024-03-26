import mongoose from 'mongoose'

const workStepSchema = new mongoose.Schema(
	{
		process: {
			type: String,
		},
		allowedRoles: [{ type: String }],
		status: {
			type: String,
			enum: ['รอดำเนินการ', 'กำลังดำเนินการ', 'เสร็จสิ้น'],
			default: '',
		},
		updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true }
)

const jobSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		company: { type: String, required: true },
		companyType: { type: String, required: true },
		description: { type: String },
		budget: { type: Number, required: true },
		profit: { type: Number, required: true },
		dueDate: { type: Date, required: true },
		// workSteps: [workStepSchema],
		// createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true }
)

// const jobSchema = new mongoose.Schema(
// 	{
// 		jobName: { type: String, required: true },
// 		company: { type: String, required: true },
// 		companyType: { type: String, required: true },
// 		description: { type: String, required: true },
// 		budget: { type: Number, required: true },
// 		profit: { type: Number, required: true },
// 		dueDate: { type: Date, required: true },
// 		status: [
// 			{
// 				process: { type: String, required: true },
// 				allowedRoles: [{ type: String, required: true }],
// 				updatedAt: { type: Date, required: true },
// 				updatedBy: {
// 					type: mongoose.Schema.Types.ObjectId,
// 					ref: 'User',
// 					required: true,
// 				},
// 				status: { type: String, required: true },
// 			},
// 		],
// 	},
// 	{ timestamps: true }
// )

const Job = mongoose.model('Job', jobSchema)

export default Job
