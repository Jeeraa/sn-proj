import { DocumentPlusIcon } from '@heroicons/react/24/outline'
import JobCard from '../components/JobCard'
import { useEffect, useState } from 'react'
import Notification from '../components/Notification'
import { useSelector } from 'react-redux'

export default function AllJobs() {
	const [jobs, setJobs] = useState([])
	const [processes, setProcesses] = useState([])
	const { currentUser } = useSelector((state) => state.user)
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

	const [showNotification, setShowNotification] = useState(false)

	useEffect(() => {
		const today = new Date()
		const sevenDaysFromNow = new Date(today)
		sevenDaysFromNow.setDate(today.getDate() + 7)

		// Filter jobs that are due within 7 days
		const filteredJobs = jobs.filter((job) => {
			const dueDate = new Date(job.dueDate)
			return dueDate < sevenDaysFromNow
		})
		// Show notification if there are jobs due within 7 days
		if (filteredJobs.length > 0) {
			setShowNotification(true)
		} else {
			setShowNotification(false)
		}
	}, [jobs])

	useEffect(() => {
		const today = new Date()

		// Filter jobs where the due date has passed
		const filteredJobs = jobs.filter((job) => {
			const dueDate = new Date(job.dueDate)
			return dueDate >= today
		})

		setFilteredJob(filteredJobs)
	}, [jobs])

	return (
		<div className="px-4 py-12 max-w-6xl mx-auto">
			{showNotification && <Notification />}
			<div className="m-5 lg:ml-4 lg:mt-0 text-end">
				{currentUser && currentUser.role === 'ผู้บริหาร' && (
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
				)}
			</div>
			<h1 className="text-xl font-bold mb-4 text-slate-700">
				ติดตามความคืบหน้างาน
			</h1>
			{filteredJob.map((job, index) => {
				const process = processes.find((p) => p.jobId === job._id)
				return (
					<JobCard
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
