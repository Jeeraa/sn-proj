import { XCircleIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function ModalForJobDetail({
	isOpen,
	onClose,
	jobId,
	title,
	company,
	budget,
	profit,
	dueDate,
	companyType,
	description,
}) {
	const [logs, setLogs] = useState([])

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

	// Fetch All Log
	const fetchJobs = async () => {
		try {
			const response = await fetch('/api/log/alllogs')
			const data = await response.json()
			setLogs(data)
		} catch (error) {
			console.error('Error fetching user data:', error)
		}
	}

	fetchJobs()

	// Filter logs for the specific jobId
	const filteredLogs = logs.filter((log) => log.jobId === jobId)

	return (
		<div
			className={`px-4 py-12 mx-auto fixed inset-0 flex justify-center items-center ${
				isOpen ? 'block' : 'hidden'
			}`}
		>
			<div className="fixed inset-0 bg-gray-900 opacity-50"></div>
			<div className="bg-white p-8 rounded-lg shadow-lg z-50 max-w-5xl mh-auto">
				<div className="flex justify-end items-end">
					<button onClick={onClose}>
						<XCircleIcon className="h-8 w-8" aria-hidden="true" />
					</button>
				</div>
				<h2 className="text-lg font-semibold mb-4 text-center">รายละเอียดงาน</h2>
				<div className="grid grid-cols-2">
					<div>
						<p className="m-1">
							<span className="text-sm font-semibold">ชื่องาน :</span>{' '}
							<span className="text-sm">{title}</span>
						</p>
						<p className="m-1">
							<span className="text-sm font-semibold">ชื่อหน่วยงาน :</span>{' '}
							<span className="text-sm">{company}</span>
						</p>
						<p className="m-1">
							<span className="text-sm font-semibold">ประเภทหน่วยงาน :</span>{' '}
							<span className="text-sm">{companyType}</span>
						</p>
						<p className="m-1">
							<span className="text-sm font-semibold">งบ :</span>{' '}
							<span className="text-sm">{formatMoney(budget)}</span>
						</p>
						<p className="m-1">
							<span className="text-sm font-semibold">กำไร :</span>{' '}
							<span className="text-sm">{formatMoney(profit)}</span>
						</p>
						<p className="m-1">
							<span className="text-sm font-semibold">วันส่งมอบ :</span>{' '}
							<span className="text-sm">{getFormattedDate(dueDate)}</span>
						</p>
						<p className="m-1">
							<span className="text-sm font-semibold">รายละเอียดงาน :</span>{' '}
							<span className="text-sm">{description}</span>
						</p>
					</div>
					<div>
						<p className="text-sm font-semibold">รายละเอียดการอัปเดตสถานะ :</p>
						{filteredLogs.map((log) => (
							<div key={log._id}>
								<p className="text-sm m-1">
									ขั้นตอน{log.process} สถานะ{log.status}, โดย {log.updateBy} เมื่อ{' '}
									{getFormattedDate(log.createdAt)}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
ModalForJobDetail.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	jobId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
	budget: PropTypes.number.isRequired,
	profit: PropTypes.number.isRequired,
	dueDate: PropTypes.string.isRequired,
	companyType: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}
