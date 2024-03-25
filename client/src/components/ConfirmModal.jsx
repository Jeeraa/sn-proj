import { useState } from 'react'

export default function ConfirmModal({ isOpen, onClose, onUpdateStatus }) {
	const [selectedStatus, setSelectedStatus] = useState('')

	const handleUpdateStatus = () => {
		setSelectedStatus('confirm')
		onClose()
	}

	return (
		<div
			className={`fixed inset-0 flex justify-center items-center ${
				isOpen ? 'block' : 'hidden'
			}`}
		>
			<div className="fixed inset-0 bg-gray-900 opacity-50"></div>
			<div className="bg-white p-8 rounded-lg shadow-lg z-50">
				<h2 className="text-lg font-semibold mb-4 text-center">
					คุณยืนยันที่จะลบบัญชีผู้ใช้งานถาวรใช่ไหม?
				</h2>

				<div className="flex justify-around mt-4">
					<button
						className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
						onClick={onClose}
					>
						ยกเลิก
					</button>
					<button
						className="bg-red-500 text-white px-4 py-2 rounded"
						onClick={handleUpdateStatus}
					>
						ยืนยัน
					</button>
				</div>
			</div>
		</div>
	)
}
