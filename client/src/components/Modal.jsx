import { useState } from 'react'

export default function Modal({ isOpen, onClose, onUpdateStatus }) {
	const [selectedStatus, setSelectedStatus] = useState('')

	const handleUpdateStatus = () => {
		// Call the onUpdateStatus function with the selected status
		onUpdateStatus(selectedStatus)
		// Close the modal
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
				<h2 className="text-lg font-semibold mb-4">Update Status</h2>
				<div className="flex flex-col space-y-4">
					<button
						className={`status-button ${
							selectedStatus === 'Waiting' ? 'selected' : ''
						}`}
						onClick={() => setSelectedStatus('Waiting')}
					>
						Waiting
					</button>
					<button
						className={`status-button ${
							selectedStatus === 'In Progress' ? 'selected' : ''
						}`}
						onClick={() => setSelectedStatus('In Progress')}
					>
						In Progress
					</button>
					<button
						className={`status-button ${
							selectedStatus === 'Complete' ? 'selected' : ''
						}`}
						onClick={() => setSelectedStatus('Complete')}
					>
						Complete
					</button>
				</div>
				<div className="flex justify-end mt-4">
					<button
						className="bg-red-500 text-white px-4 py-2 rounded mr-2"
						onClick={onClose}
					>
						Cancel
					</button>
					<button
						className="bg-blue-500 text-white px-4 py-2 rounded"
						onClick={handleUpdateStatus}
					>
						OK
					</button>
				</div>
			</div>
		</div>
	)
}
