import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import ConfirmModal from './ConfirmModal'

export default function UserCard() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isShowCardDetailModalOpen, setIsShowCardDetailModalOpen] =
		useState(false)
	const [selectedStatus, setSelectedStatus] = useState('')

	const handleUpdateStatus = (status) => {
		setSelectedStatus(status)
	}

	return (
		<div className="">
			<div className="bg-sky-200 shadow-md rounded-lg p-3 flex justify-between items-center">
				<div className="space-x-10">
					<p className="m-1">ชื่อ : vdtbfbf</p>
				</div>
				<div className="space-x-10">
					<p className="m-1 ">นามสกุล : vmdobnkd</p>
				</div>
				<div className="space-x-10">
					<p className="m-1">E-mail : admin@gmail.com</p>
				</div>
				<div className="space-x-10">
					<p className="m-1">บทบาท : แอดมิน</p>
				</div>
				<div className="flex items-center space-x-4 ml-4">
					<PencilSquareIcon className="h-6 w-6 text-sky-500 cursor-pointer" />
					<TrashIcon
						className="h-6 w-6 text-red-500 cursor-pointer"
						onClick={() => setIsModalOpen(true)}
					/>
				</div>
			</div>
			<ConfirmModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onUpdateStatus={handleUpdateStatus}
			/>
		</div>
	)
}
