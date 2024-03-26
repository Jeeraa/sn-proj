import {
	CurrencyDollarIcon,
	DocumentArrowDownIcon,
	DocumentCheckIcon,
	ShoppingCartIcon,
	TruckIcon,
	PencilSquareIcon,
	TrashIcon,
} from '@heroicons/react/24/outline'
import Modal from './Modal'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function TaskCard({ job, currentUser }) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isShowCardDetailModalOpen, setIsShowCardDetailModalOpen] =
		useState(false)
	const [selectedProcess, setSelectedProcess] = useState(null)
	const [selectedStatus, setSelectedStatus] = useState({})

	const handleUpdateStatus = (process, status) => {
		const workStep = job.status.find((step) => step.process === process)

		if (workStep) {
			if (workStep.allowedRoles.includes(currentUser.role)) {
				// Pass the selected process and status to the Modal component
				setSelectedProcess({ process, status })
				setIsModalOpen(true)
			} else {
				alert('You are not authorized to update this process')
			}
		}
	}

	const isProcessCompleted = (process) => {
		const workStep = job.status.find((step) => step.process === process)
		return workStep && workStep.status === 'เสร็จสิ้น'
	}

	return (
		<div className="">
			<div className="bg-sky-200 shadow-md rounded-lg p-3 flex justify-between items-center">
				<div className="w-3/5 pr-6">
					<div>
						<p className="text-sm m-1">ชื่องาน : {job.title}</p>
						<p className="text-sm m-1">ชื่อหน่วยงาน : {job.agency}</p>
						<p className="text-sm m-1">งบ : {job.budget} บาท</p>
						<p className="text-sm m-1">กำไร : {job.profit} บาท</p>
						<p className="text-sm m-1">วันส่งมอบ : {job.dueDate.toLocaleDateString()}</p>
					</div>
				</div>

				<div className="flex justify-between items-center space-x-5">
					{job.status.map((step, index) => (
						<button
							key={index}
							type="button"
							className="max-w-lg mx-auto flex flex-col items-center mb-1 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
							onClick={() => setIsModalOpen(true)}
							disabled={
								index > 0 && !isProcessCompleted(job.status[index - 1].process)
							}
						>
							<p className="font-semibold mb-3">{step.process}</p>
							{getProcessIcon(step.process)}
							<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
								{selectedStatus[step.process] || step.status}
							</div>
						</button>
					))}
				</div>
				<div className="flex items-center space-x-4 ml-4">
					<PencilSquareIcon
						className="h-6 w-6 text-sky-500 cursor-pointer"
						onClick={() => setIsShowCardDetailModalOpen(true)}
					/>
					<TrashIcon className="h-6 w-6 text-red-500 cursor-pointer" />
				</div>
			</div>

			{/* Render the Modal component */}
			<Modal
				isOpen={isModalOpen}
				onClose={() => {
					setIsModalOpen(false)
					setSelectedProcess(null) // Reset the selected process when closing the modal
				}}
				selectedProcess={selectedProcess} // Pass the selected process to the Modal component
				onUpdateStatus={(status) => {
					handleUpdateStatus(selectedProcess.process, status)
					setIsModalOpen(false)
					setSelectedProcess(null) // Reset the selected process after updating the status
				}}
			/>
		</div>
	)
}

// Helper function to get the appropriate icon for each process
const getProcessIcon = (process) => {
	switch (process) {
		case 'การประมูล':
			return <DocumentArrowDownIcon className="h-8 w-8" aria-hidden="true" />
		case 'การเซ็นสัญญา':
			return <DocumentCheckIcon className="h-8 w-8" aria-hidden="true" />
		case 'การสั่งซื้อ':
			return <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
		case 'การส่งมอบ':
			return <TruckIcon className="h-8 w-8" aria-hidden="true" />
		case 'การชำระเงิน':
			return <CurrencyDollarIcon className="h-8 w-8" aria-hidden="true" />
		default:
			return null
	}
}
TaskCard.propTypes = {
	job: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		agency: PropTypes.string.isRequired,
		budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		profit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		dueDate: PropTypes.instanceOf(Date).isRequired,
		status: PropTypes.arrayOf(
			PropTypes.shape({
				process: PropTypes.string.isRequired,
				allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
				status: PropTypes.string.isRequired,
			})
		).isRequired,
	}).isRequired,
	currentUser: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		role: PropTypes.string.isRequired,
	}).isRequired,
}
