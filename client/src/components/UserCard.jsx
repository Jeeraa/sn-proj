import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import ConfirmModal from './ConfirmModal'
import { Link } from 'react-router-dom'

export default function UserCard({ name, lastName, email, role, userId }) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<div className="">
			<div className="bg-sky-200 shadow-md rounded-lg p-3 flex justify-between items-center mt-5">
				<div className="space-x-10">
					<p className="m-1">ชื่อ : {name}</p>
				</div>
				<div className="space-x-10">
					<p className="m-1 ">นามสกุล : {lastName}</p>
				</div>
				<div className="space-x-10">
					<p className="m-1">E-mail : {email}</p>
				</div>
				<div className="space-x-10">
					<p className="m-1">บทบาท : {role}</p>
				</div>
				<div className="flex items-center space-x-4 ml-4">
					<Link to={`/all-users/${userId}`} className="text-sky-500 cursor-pointer">
						<PencilSquareIcon className="h-6 w-6" />
					</Link>
				</div>
			</div>
			<ConfirmModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				// onUpdateStatus={handleUpdateStatus}
			/>
		</div>
	)
}
