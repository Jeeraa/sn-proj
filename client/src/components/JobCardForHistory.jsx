import {
	CurrencyDollarIcon,
	DocumentArrowDownIcon,
	DocumentCheckIcon,
	DocumentMagnifyingGlassIcon,
	PencilSquareIcon,
	ShoppingCartIcon,
	TruckIcon,
} from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ModalForJobDetail from './ModalForJobDetail'
import Modal from './Modal'

export default function JobCardForHistory({
	jobId,
	title,
	company,
	budget,
	profit,
	dueDate,
}) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isModalOpen2, setIsModalOpen2] = useState(false)
	const [isModalOpen3, setIsModalOpen3] = useState(false)
	const [isModalOpen4, setIsModalOpen4] = useState(false)
	const [isModalOpen5, setIsModalOpen5] = useState(false)
	const [isModalOpen6, setIsModalOpen6] = useState(false)
	const [selectedStatus1, setSelectedStatus1] = useState('')
	const [selectedStatus2, setSelectedStatus2] = useState('')
	const [selectedStatus3, setSelectedStatus3] = useState('')
	const [selectedStatus4, setSelectedStatus4] = useState('')
	const [selectedStatus5, setSelectedStatus5] = useState('')

	const handleUpdateStatus1 = (status) => {
		setSelectedStatus1(status)
	}
	const handleUpdateStatus2 = (status) => {
		setSelectedStatus2(status)
	}
	const handleUpdateStatus3 = (status) => {
		setSelectedStatus3(status)
	}
	const handleUpdateStatus4 = (status) => {
		setSelectedStatus4(status)
	}
	const handleUpdateStatus5 = (status) => {
		setSelectedStatus5(status)
	}

	function formatMoney(amount) {
		// Convert the amount to a string and split it into integer and decimal parts
		const [integer, decimal] = String(amount).split('.')

		// Format the integer part with thousands separators
		const formattedInteger = integer
			.split('')
			.reverse()
			.reduce((acc, digit, index) => {
				if (index > 0 && index % 3 === 0) {
					acc.push(',')
				}
				acc.push(digit)
				return acc
			}, [])
			.reverse()
			.join('')

		// If there's a decimal part, append it to the formatted integer
		const formattedAmount = decimal
			? `${formattedInteger}.${decimal}`
			: formattedInteger

		return formattedAmount
	}

	function getFormattedDate(dateTimeString, format = 'DD/MM/YYYY') {
		const date = new Date(dateTimeString)
		const day = String(date.getDate()).padStart(2, '0')
		const month = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-based
		const year = date.getFullYear()

		switch (format.toUpperCase()) {
			case 'DD/MM/YYYY':
				return `${day}/${month}/${year}`
			case 'YYYY/MM/DD':
				return `${year}/${month}/${day}`
			default:
				throw new Error('Invalid date format')
		}
	}

	return (
		<div className="">
			<div className="bg-sky-200 shadow-md rounded-lg p-3 flex justify-between items-center mt-5">
				<div className="w-3/5 pr-6">
					<div>
						<p className="text-sm m-1">ชื่องาน : {title}</p>
						<p className="text-sm m-1">ชื่อหน่วยงาน : {company}</p>
						<p className="text-sm m-1">งบ : {formatMoney(budget)} บาท</p>
						<p className="text-sm m-1">กำไร : {formatMoney(profit)} บาท</p>
						<p className="text-sm m-1">วันส่งมอบ : {getFormattedDate(dueDate)}</p>
					</div>
				</div>

				{/* Process 1 */}
				<button
					type="button"
					className="max-w-lg mx-auto flex flex-col items-center mb-1 mr-3 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
					onClick={() => setIsModalOpen2(true)}
				>
					<p className="font-semibold mb-3">การประมูล</p>
					<DocumentArrowDownIcon className="h-8 w-8" aria-hidden="true" />
					<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
						{selectedStatus1}
					</div>
				</button>
				<button
					type="button"
					className="max-w-lg mx-auto flex flex-col items-center mb-1 mr-3 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
					onClick={() => setIsModalOpen3(true)}
				>
					<p className="font-semibold mb-3">การเซ็นสัญญา</p>
					<DocumentCheckIcon className="h-8 w-8" aria-hidden="true" />
					<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
						{selectedStatus2}
					</div>
				</button>
				<button
					type="button"
					className="max-w-lg mx-auto flex flex-col items-center mb-1 mr-3 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
					onClick={() => setIsModalOpen4(true)}
				>
					<p className="font-semibold mb-3">การสั่งซื้อ</p>
					<ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
					<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
						{selectedStatus3}
					</div>
				</button>
				<button
					type="button"
					className="max-w-lg mx-auto flex flex-col items-center mb-1 mr-3 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
					onClick={() => setIsModalOpen5(true)}
				>
					<p className="font-semibold mb-3">การส่งมอบ</p>
					<TruckIcon className="h-8 w-8" aria-hidden="true" />
					<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
						{selectedStatus4}
					</div>
				</button>
				<button
					type="button"
					className="max-w-lg mx-auto flex flex-col items-center mb-1 mr-3 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
					onClick={() => setIsModalOpen6(true)}
				>
					<p className="font-semibold mb-3">การชำระเงิน</p>
					<CurrencyDollarIcon className="h-8 w-8" aria-hidden="true" />
					<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
						{selectedStatus5}
					</div>
				</button>

				{/* <div className="flex justify-between items-center space-x-5">
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
				</div> */}

				<div className="flex items-center space-x-4 ml-4">
					<button
						className="text-sky-500 cursor-pointer"
						onClick={() => setIsModalOpen(true)}
					>
						<DocumentMagnifyingGlassIcon className="h-6 w-6 mr-5" />{' '}
					</button>
				</div>
			</div>
			{/* Render the Modal component */}
			<ModalForJobDetail
				isOpen={isModalOpen}
				onClose={() => {
					setIsModalOpen(false)
				}}
				jobId={jobId}
				title={title}
				company={company}
				budget={budget}
				profit={profit}
				dueDate={dueDate}
			/>
			<Modal
				isOpen={isModalOpen2}
				onClose={() => setIsModalOpen2(false)}
				onUpdateStatus={handleUpdateStatus1}
			/>
			<Modal
				isOpen={isModalOpen3}
				onClose={() => setIsModalOpen3(false)}
				onUpdateStatus={handleUpdateStatus2}
			/>
			<Modal
				isOpen={isModalOpen4}
				onClose={() => setIsModalOpen4(false)}
				onUpdateStatus={handleUpdateStatus3}
			/>
			<Modal
				isOpen={isModalOpen5}
				onClose={() => setIsModalOpen5(false)}
				onUpdateStatus={handleUpdateStatus4}
			/>
			<Modal
				isOpen={isModalOpen6}
				onClose={() => setIsModalOpen6(false)}
				onUpdateStatus={handleUpdateStatus5}
			/>
		</div>
	)
}

// Helper function to get the appropriate icon for each process
// const getProcessIcon = (process) => {
// 	switch (process) {
// 		case 'การประมูล':
// 			return <DocumentArrowDownIcon className="h-8 w-8" aria-hidden="true" />
// 		case 'การเซ็นสัญญา':
// 			return <DocumentCheckIcon className="h-8 w-8" aria-hidden="true" />
// 		case 'การสั่งซื้อ':
// 			return <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
// 		case 'การส่งมอบ':
// 			return <TruckIcon className="h-8 w-8" aria-hidden="true" />
// 		case 'การชำระเงิน':
// 			return <CurrencyDollarIcon className="h-8 w-8" aria-hidden="true" />
// 		default:
// 			return null
// 	}
// }

// JobCard.propTypes = {
// 	job: PropTypes.shape({
// 		title: PropTypes.string.isRequired,
// 		description: PropTypes.string.isRequired,
// 		company: PropTypes.string.isRequired,
// 		budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// 		profit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// 		dueDate: PropTypes.instanceOf(Date).isRequired,
// 		status: PropTypes.arrayOf(
// 			PropTypes.shape({
// 				process: PropTypes.string.isRequired,
// 				allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
// 				status: PropTypes.string.isRequired,
// 			})
// 		).isRequired,
// 	}).isRequired,
// 	currentUser: PropTypes.shape({
// 		_id: PropTypes.string.isRequired,
// 		role: PropTypes.string.isRequired,
// 	}).isRequired,
// }

JobCardForHistory.propTypes = {
	jobId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
	companyType: PropTypes.string,
	budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	profit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	dueDate: PropTypes.instanceOf(Date).isRequired,
}
