import {
	ArrowPathIcon,
	CheckCircleIcon,
	ClockIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Modal({ isOpen, onClose, onUpdateStatus }) {
	const [selectedStatus, setSelectedStatus] = useState('')

	const handleUpdateStatus = () => {
		onUpdateStatus(selectedStatus)
		onClose()
	}
	// const handleUpdateStatus = () => {
	// 	onUpdateStatus(selectedStatus)
	// 	setSelectedStatus('') // Reset the selected status after update
	// }

	return (
		<div
			className={`fixed inset-0 flex justify-center items-center ${
				isOpen ? 'block' : 'hidden'
			}`}
		>
			<div className="fixed inset-0 bg-gray-900 opacity-50"></div>
			<div className="bg-white p-8 rounded-lg shadow-lg z-50">
				<h2 className="text-lg font-semibold mb-4 text-center">อัปเดตสถานะ</h2>
				<div className="flex justify-between items-center space-x-5">
					<button
						type="button"
						className={`max-w-lg mx-auto flex flex-col items-center rounded-full bg-sky-400 px-3 py-7 text-sm text-white hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${
							selectedStatus === 'รอดำเนินการ' ? 'selected' : ''
						}`}
						onClick={() => setSelectedStatus('รอดำเนินการ')}
					>
						<ClockIcon className="h-8 w-8" aria-hidden="true" />

						<div className="w-24 text-sm mt-2 truncate">รอดำเนินการ</div>
					</button>
					<button
						type="button"
						className={`max-w-lg mx-auto flex flex-col items-center mb-1 rounded-full bg-sky-400 px-3 py-7 text-sm text-white hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${
							selectedStatus === 'กำลังดำเนินการ' ? 'selected' : ''
						}`}
						onClick={() => setSelectedStatus('กำลังดำเนินการ')}
					>
						<ArrowPathIcon className="h-8 w-8" aria-hidden="true" />

						<div className="w-24 text-sm mt-2 truncate">กำลังดำเนินการ</div>
					</button>
					<button
						type="button"
						className={`max-w-lg mx-auto flex flex-col items-center mb-1 rounded-full bg-sky-400 px-3 py-7 text-sm text-white hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${
							selectedStatus === 'เสร็จสิ้น' ? 'selected' : ''
						}`}
						onClick={() => setSelectedStatus('เสร็จสิ้น')}
					>
						<CheckCircleIcon className="h-8 w-8" aria-hidden="true" />

						<div className="w-24 text-sm mt-2 truncate">เสร็จสิ้น</div>
					</button>
				</div>
				<div className="flex justify-around mt-4">
					<button
						className="bg-red-500 text-white px-4 py-2 rounded mr-2"
						onClick={onClose}
					>
						ยกเลิก
					</button>
					<button
						className="bg-emerald-500 text-white px-4 py-2 rounded"
						onClick={handleUpdateStatus}
					>
						ยืนยัน
					</button>
				</div>
			</div>
		</div>
	)
}
