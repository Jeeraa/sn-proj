import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function UserCard() {
	useState(false)

	return (
		<div className="">
			<div className="bg-sky-200 shadow-md rounded-lg p-3 flex justify-between items-center">
				<div className="w-3/5 pr-6 flex flex-col">
					<p className="m-1">ชื่อ : </p>
					<p className="m-1">นามสกุล : </p>
					<p className="m-1">E-mail : </p>
					<p className="m-1">บทบาท : </p>
				</div>

				<div className="flex items-center space-x-4 ml-4">
					<PencilSquareIcon className="h-6 w-6 text-sky-500 cursor-pointer" />
					<TrashIcon className="h-6 w-6 text-red-500 cursor-pointer" />
				</div>
			</div>
		</div>
	)
}
