import { useEffect, useState } from 'react'
import JobCardForHistory from '../components/JobCardForHistory'

export default function History() {
	const [jobs, setJobs] = useState([])

	// Fetch user data from the server
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
	return (
		<div className="px-4 py-12 max-w-6xl mx-auto">
			<h1 className="text-xl font-bold mb-4 text-slate-700">รายการงานย้อนหลัง</h1>
			{jobs.map((job, index) => (
				<JobCardForHistory
					key={index}
					jobId={job._id}
					title={job.title}
					company={job.company}
					budget={job.budget}
					profit={job.profit}
					dueDate={job.dueDate}
				/>
			))}
		</div>
	)
}
