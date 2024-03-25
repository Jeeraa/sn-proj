import {
	CurrencyDollarIcon,
	DocumentArrowDownIcon,
	DocumentCheckIcon,
	ShoppingCartIcon,
	TruckIcon,
	PencilSquareIcon,
	TrashIcon,
} from '@heroicons/react/24/outline'
import Modal from './Modal'
import { useState } from 'react'

export default function TaskCard() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isShowCardDetailModalOpen, setIsShowCardDetailModalOpen] =
		useState(false)
	const [selectedStatus1, setSelectedStatus1] = useState('')
	const [selectedStatus2, setSelectedStatus2] = useState('')
	const [selectedStatus3, setSelectedStatus3] = useState('')
	const [selectedStatus4, setSelectedStatus4] = useState('')
	const [selectedStatus5, setSelectedStatus5] = useState('')

	const handleUpdateStatus1 = (status) => {
		setSelectedStatus1(status)
	}

	const handleUpdateStatus2 = (status) => {
		if (selectedStatus1 !== 'เสร็จสิ้น') {
			setSelectedStatus2(status)
		} else {
			alert('Please complete the previous process first.')
		}
	}

	const handleUpdateStatus3 = (status) => {
		if (selectedStatus2 !== 'เสร็จสิ้น') {
			setSelectedStatus3(status)
		} else {
			alert('Please complete the previous process first.')
		}
	}

	const handleUpdateStatus4 = (status) => {
		if (selectedStatus3 !== '') {
			setSelectedStatus4(status)
		} else {
			alert('Please complete the previous process first.')
		}
	}

	const handleUpdateStatus5 = (status) => {
		if (selectedStatus4 !== '') {
			setSelectedStatus5(status)
		} else {
			alert('Please complete the previous process first.')
		}
	}

	return (
		<div className="">
			<div className="bg-sky-200 shadow-md rounded-lg p-3 flex justify-between items-center">
				<div className="w-3/5 pr-6">
					<div>
						<p className="text-sm m-1">ชื่องาน</p>
						<p className="text-sm m-1">ชื่อหน่วยงาน</p>
						<p className="text-sm m-1">งบ</p>
						<p className="text-sm m-1">กำไร</p>
						<p className="text-sm m-1">วันส่งมอบ</p>
					</div>
				</div>

				<div className="flex justify-between items-center space-x-5">
					{/* Process 1 */}
					<button
						type="button"
						className="max-w-lg mx-auto flex flex-col items-center mb-1 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
						onClick={() => setIsModalOpen(true)}
					>
						<p className="font-semibold mb-3">การประมูล</p>
						<DocumentArrowDownIcon className="h-8 w-8" aria-hidden="true" />
						<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
							{selectedStatus1}
						</div>
					</button>

					{/* Process 2 */}
					<button
						type="button"
						className="max-w-lg mx-auto flex flex-col items-center mb-1 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
						onClick={() => setIsModalOpen(true)}
					>
						<p className="font-semibold mb-3">การเซ็นสัญญา</p>

						<DocumentCheckIcon className="h-8 w-8" aria-hidden="true" />
						<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
							{selectedStatus2}
						</div>
					</button>

					{/* Process 3 */}
					<button
						type="button"
						className="max-w-lg mx-auto flex flex-col items-center mb-1 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
						onClick={() => setIsModalOpen(true)}
					>
						<p className="font-semibold mb-3">การสั่งซื้อ</p>
						<ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
						<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
							{selectedStatus3}
						</div>
					</button>

					{/* Process 4 */}
					<button
						type="button"
						className="max-w-lg mx-auto flex flex-col items-center mb-1 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
						onClick={() => setIsModalOpen(true)}
					>
						<p className="font-semibold mb-3">การส่งมอบ</p>
						<TruckIcon className="h-8 w-8" aria-hidden="true" />
						<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
							{selectedStatus4}
						</div>
					</button>

					{/* Process 5 */}
					<button
						type="button"
						className="max-w-lg mx-auto flex flex-col items-center mb-1 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
						onClick={() => setIsModalOpen(true)}
					>
						<p className="font-semibold mb-3">การชำระเงิน</p>
						<CurrencyDollarIcon className="h-8 w-8" aria-hidden="true" />
						<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
							{selectedStatus5}
						</div>
					</button>
				</div>
				<div className="flex items-center space-x-4 ml-4">
					<PencilSquareIcon
						className="h-6 w-6 text-sky-500 cursor-pointer"
						onClick={() => setIsShowCardDetailModalOpen(true)}
					/>
					<TrashIcon className="h-6 w-6 text-red-500 cursor-pointer" />
				</div>
			</div>

			{/* Edit Button */}
			{/* <button
				type="button"
				className="max-w-lg mx-auto flex flex-col items-center mb-1 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
			>
				<p className="font-semibold mb-3">การชำระเงิน</p>
				<CurrencyDollarIcon className="h-8 w-8" aria-hidden="true" />
				<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
					เสร็จสิ้น
				</div>
			</button> */}

			{/* Render the Modal component */}
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onUpdateStatus1={handleUpdateStatus1}
				onUpdateStatus2={handleUpdateStatus2}
				onUpdateStatus3={handleUpdateStatus3}
				onUpdateStatus4={handleUpdateStatus4}
				onUpdateStatus5={handleUpdateStatus5}
			/>
		</div>
	)
}
