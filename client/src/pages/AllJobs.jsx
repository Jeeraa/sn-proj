import { DocumentPlusIcon } from '@heroicons/react/24/outline'
import JobCard from '../components/JobCard'
import { useEffect, useState } from 'react'

export default function AllJobs() {
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
			<div className="m-5 lg:ml-4 lg:mt-0 text-end">
				<span className="sm:ml-3">
					<a href="/create-job">
						<button
							type="button"
							className="inline-flex items-center rounded-md bg-red-400 px-3 py-2 text-sm text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
						>
							<DocumentPlusIcon
								className="-ml-0.5 mr-1.5 h-5 w-5"
								aria-hidden="true"
							/>
							เพิ่มงาน
						</button>
					</a>
				</span>
			</div>
			<h1 className="text-xl font-bold mb-4 text-slate-700">
				ติดตามความคืบหน้างาน
			</h1>
			{jobs.map((job, index) => (
				<JobCard
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
