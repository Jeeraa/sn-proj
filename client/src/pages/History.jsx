import { useEffect, useState } from 'react'
import JobCardForHistory from '../components/JobCardForHistory'

export default function History() {
	const [jobs, setJobs] = useState([])
	const [processes, setProcesses] = useState([])
	const [filteredJob, setFilteredJob] = useState([])

	// Fetch All Job
	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await fetch('/api/job/alljobs')
				const data = await response.json()
				setJobs(data)
			} catch (error) {
				console.error('Error fetching user data:', error)
			}
		}

		fetchJobs()
	}, [])

	// Fetch All Process
	useEffect(() => {
		const fetchProcesses = async () => {
			try {
				const response = await fetch('/api/process/allprocess')
				const data = await response.json()
				setProcesses(data)
			} catch (error) {
				console.error('Error fetching user data:', error)
			}
		}

		fetchProcesses()
	})

	useEffect(() => {
		const today = new Date()

		// Filter jobs where the due date has passed
		const filteredJobs = jobs.filter((job) => {
			const dueDate = new Date(job.dueDate)
			return dueDate < today
		})

		setFilteredJob(filteredJobs)
	}, [jobs])

	return (
		<div className="px-4 py-12 max-w-6xl mx-auto">
			<h1 className="text-xl font-bold mb-4 text-slate-700">รายการงานย้อนหลัง</h1>
			{filteredJob.map((job, index) => {
				const process = processes.find((p) => p.jobId === job._id)
				return (
					<JobCardForHistory
						key={index}
						jobId={job._id}
						title={job.title}
						company={job.company}
						companyType={job.companyType}
						description={job.description}
						budget={job.budget}
						profit={job.profit}
						dueDate={job.dueDate}
						processId={process ? process._id : null}
					/>
				)
			})}
		</div>
	)
}
