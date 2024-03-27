import { XCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function ModalForJobDetail({
	isOpen,
	onClose,
	selectedProcess,
	onUpdateStatus,
	jobId,
	title,
	company,
	budget,
	profit,
	dueDate,
}) {
	const [selectedStatus, setSelectedStatus] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)

	// const handleUpdateStatus = () => {
	// 	onUpdateStatus(selectedStatus)
	// 	onClose()
	// }
	const handleUpdateStatus = () => {
		onUpdateStatus(selectedStatus)
		setSelectedStatus('') // Reset the selected status after update
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
		<div
			className={`px-4 py-12 mx-auto fixed inset-0 flex justify-center items-center ${
				isOpen ? 'block' : 'hidden'
			}`}
		>
			<div className="fixed inset-0 bg-gray-900 opacity-50"></div>
			<div className="bg-white p-8 rounded-lg shadow-lg z-50 w-2/5 h-72">
				<div className="flex justify-end items-end">
					<button onClick={onClose}>
						<XCircleIcon className="h-8 w-8" aria-hidden="true" />
					</button>
				</div>
				<h2 className="text-lg font-semibold mb-4 text-center">รายละเอียดงาน</h2>
				<div className="w-3/5 pr-6">
					<div>
						<p className="text-sm m-1">ชื่องาน : {title}</p>
						<p className="text-sm m-1">ชื่อหน่วยงาน : {company}</p>
						<p className="text-sm m-1">งบ : {formatMoney(budget)} บาท</p>
						<p className="text-sm m-1">กำไร : {formatMoney(profit)} บาท</p>
						<p className="text-sm m-1">วันส่งมอบ : {getFormattedDate(dueDate)}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
