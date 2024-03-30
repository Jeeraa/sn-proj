import {
	// ArchiveBoxArrowDownIcon,
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
import { useSelector } from 'react-redux'

export default function JobCard({
	jobId,
	title,
	company,
	budget,
	profit,
	dueDate,
	processId,
	companyType,
	description,
}) {
	const [formData, setFormData] = useState({})
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isModalOpen2, setIsModalOpen2] = useState(false)
	const [isModalOpen3, setIsModalOpen3] = useState(false)
	const [isModalOpen4, setIsModalOpen4] = useState(false)
	const [isModalOpen5, setIsModalOpen5] = useState(false)
	const [isModalOpen6, setIsModalOpen6] = useState(false)
	const { currentUser } = useSelector((state) => state.user)

	// Fetch Process Data
	useEffect(() => {
		const fetchProcessData = async () => {
			try {
				// Ensure processes array is not empty
				const response = await fetch(`/api/process/allprocess/${processId}`)
				const processData = await response.json({})
				// console.log(processData.processes[0].status)
				setFormData(processData)
			} catch (error) {
				console.error('Error fetching user data:', error)
			}
		}

		fetchProcessData()
	}, [processId])

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

	const handleStatusUpdate = async (updatedProcessData) => {
		setFormData(updatedProcessData)
		// console.log(updatedProcessData)
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
					onClick={() =>
						formData.processes?.[0]?.allowedRoles.includes(currentUser.role)
							? setIsModalOpen2(true)
							: setIsModalOpen2(false)
					}
				>
					<p className="font-semibold mb-3">
						{formData.processes?.[0]?.process ?? ''}
					</p>
					<DocumentArrowDownIcon className="h-8 w-8" aria-hidden="true" />
					<div
						className={`w-28 text-sm rounded-full ${
							formData.processes?.[0]?.status === 'รอดำเนินการ'
								? 'bg-red-400'
								: formData.processes?.[0]?.status === 'กำลังดำเนินการ'
								? 'bg-orange-400'
								: formData.processes?.[0]?.status === 'เสร็จสิ้น'
								? 'bg-emerald-500'
								: 'bg-sky-400'
						} text-white mt-3 px-2 py-1 truncate`}
					>
						{formData.processes?.[0]?.status ?? ''}
					</div>
				</button>

				{/* Process 2 */}
				<button
					type="button"
					className="max-w-lg mx-auto flex flex-col items-center mb-1 mr-3 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
					onClick={() =>
						formData.processes?.[1]?.allowedRoles.includes(currentUser.role) &&
						formData.processes?.[0]?.status === 'เสร็จสิ้น'
							? setIsModalOpen3(true)
							: setIsModalOpen3(false)
					}
				>
					<p className="font-semibold mb-3">
						{formData.processes?.[1]?.process ?? ''}
					</p>
					<DocumentCheckIcon className="h-8 w-8" aria-hidden="true" />
					<div
						className={`w-28 text-sm rounded-full ${
							formData.processes?.[1]?.status === 'รอดำเนินการ'
								? 'bg-red-400'
								: formData.processes?.[1]?.status === 'กำลังดำเนินการ'
								? 'bg-orange-400'
								: formData.processes?.[1]?.status === 'เสร็จสิ้น'
								? 'bg-emerald-500'
								: 'bg-sky-400'
						} text-white mt-3 px-2 py-1 truncate`}
					>
						{formData.processes?.[1]?.status ?? ''}
					</div>
				</button>

				{/* Process 3 */}
				<button
					type="button"
					className="max-w-lg mx-auto flex flex-col items-center mb-1 mr-3 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
					onClick={() =>
						formData.processes?.[2]?.allowedRoles.includes(currentUser.role) &&
						formData.processes?.[0]?.status === 'เสร็จสิ้น' &&
						formData.processes?.[1]?.status === 'เสร็จสิ้น'
							? setIsModalOpen4(true)
							: setIsModalOpen4(false)
					}
				>
					<p className="font-semibold mb-3">
						{formData.processes?.[2]?.process ?? ''}
					</p>
					<ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
					<div
						className={`w-28 text-sm rounded-full ${
							formData.processes?.[2]?.status === 'รอดำเนินการ'
								? 'bg-red-400'
								: formData.processes?.[2]?.status === 'กำลังดำเนินการ'
								? 'bg-orange-400'
								: formData.processes?.[2]?.status === 'เสร็จสิ้น'
								? 'bg-emerald-500'
								: 'bg-sky-400'
						} text-white mt-3 px-2 py-1 truncate`}
					>
						{formData.processes?.[2]?.status ?? ''}
					</div>
				</button>

				{/* Process 4 */}
				<button
					type="button"
					className="max-w-lg mx-auto flex flex-col items-center mb-1 mr-3 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
					onClick={() =>
						formData.processes?.[3]?.allowedRoles.includes(currentUser.role) &&
						formData.processes?.[0]?.status === 'เสร็จสิ้น' &&
						formData.processes?.[1]?.status === 'เสร็จสิ้น' &&
						formData.processes?.[2]?.status === 'เสร็จสิ้น'
							? setIsModalOpen5(true)
							: setIsModalOpen5(false)
					}
				>
					<p className="font-semibold mb-3">
						{formData.processes?.[3]?.process ?? ''}
					</p>
					<TruckIcon className="h-8 w-8" aria-hidden="true" />
					<div
						className={`w-28 text-sm rounded-full ${
							formData.processes?.[3]?.status === 'รอดำเนินการ'
								? 'bg-red-400'
								: formData.processes?.[3]?.status === 'กำลังดำเนินการ'
								? 'bg-orange-400'
								: formData.processes?.[3]?.status === 'เสร็จสิ้น'
								? 'bg-emerald-500'
								: 'bg-sky-400'
						} text-white mt-3 px-2 py-1 truncate`}
					>
						{formData.processes?.[3]?.status ?? ''}
					</div>
				</button>

				{/* Process 5 */}
				<button
					type="button"
					className="max-w-lg mx-auto flex flex-col items-center mb-1 mr-3 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
					onClick={() =>
						formData.processes?.[4]?.allowedRoles.includes(currentUser.role) &&
						formData.processes?.[0]?.status === 'เสร็จสิ้น' &&
						formData.processes?.[1]?.status === 'เสร็จสิ้น' &&
						formData.processes?.[2]?.status === 'เสร็จสิ้น' &&
						formData.processes?.[3]?.status === 'เสร็จสิ้น'
							? setIsModalOpen6(true)
							: setIsModalOpen6(false)
					}
				>
					<p className="font-semibold mb-3">
						{formData.processes?.[4]?.process ?? ''}
					</p>
					<CurrencyDollarIcon className="h-8 w-8" aria-hidden="true" />
					<div
						className={`w-28 text-sm rounded-full ${
							formData.processes?.[4]?.status === 'รอดำเนินการ'
								? 'bg-red-400'
								: formData.processes?.[4]?.status === 'กำลังดำเนินการ'
								? 'bg-orange-400'
								: formData.processes?.[4]?.status === 'เสร็จสิ้น'
								? 'bg-emerald-500'
								: 'bg-sky-400'
						} text-white mt-3 px-2 py-1 truncate`}
					>
						{formData.processes?.[4]?.status ?? ''}
					</div>
				</button>

				<div className="flex items-center space-x-4 ml-4">
					<button
						className="text-sky-500 cursor-pointer"
						onClick={() => setIsModalOpen(true)}
					>
						<DocumentMagnifyingGlassIcon className="h-6 w-6 mr-1" />
					</button>
					{/* <button className="text-sky-500 cursor-pointer" onClick={() => ''}>
						<ArchiveBoxArrowDownIcon className="h-6 w-6 mr-1" />
					</button> */}
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
				companyType={companyType}
				description={description}
			/>
			{/* <Modal
				jobId={jobId}
				isOpen={isModalOpen2}
				onClose={() => setIsModalOpen2(false)}
				processData={formData}
				processName={formData.processes?.[0]?.process}
				onStatusUpdate={handleStatusUpdate}
			/>
			<Modal
				jobId={jobId}
				isOpen={isModalOpen3}
				onClose={() => setIsModalOpen3(false)}
				processData={formData}
				processName={formData.processes?.[1]?.process}
				onStatusUpdate={handleStatusUpdate}
			/>
			<Modal
				jobId={jobId}
				isOpen={isModalOpen4}
				onClose={() => setIsModalOpen4(false)}
				processData={formData}
				processName={formData.processes?.[2]?.process}
				onStatusUpdate={handleStatusUpdate}
			/>
			<Modal
				jobId={jobId}
				isOpen={isModalOpen5}
				onClose={() => setIsModalOpen5(false)}
				processData={formData}
				processName={formData.processes?.[3]?.process}
				onStatusUpdate={handleStatusUpdate}
			/>
			<Modal
				jobId={jobId}
				isOpen={isModalOpen6}
				onClose={() => setIsModalOpen6(false)}
				processData={formData}
				processName={formData.processes?.[4]?.process}
				onStatusUpdate={handleStatusUpdate}
			/> */}
		</div>
	)
}

JobCard.propTypes = {
	jobId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
	companyType: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	profit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	dueDate: PropTypes.instanceOf(Date).isRequired,
	processId: PropTypes.string,
}
