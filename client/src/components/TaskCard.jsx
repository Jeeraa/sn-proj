import {
	BuildingStorefrontIcon,
	CurrencyDollarIcon,
	DocumentArrowDownIcon,
	DocumentCheckIcon,
	DocumentPlusIcon,
	ShoppingCartIcon,
	TruckIcon,
} from '@heroicons/react/24/outline'

export default function TaskCard() {
	const handleEdit = () => {
		// Add your edit functionality here
		console.log('Edit button clicked')
	}
	return (
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
				>
					<p className="font-semibold mb-3">การประมูล</p>
					<DocumentArrowDownIcon className="h-8 w-8" aria-hidden="true" />
					<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
						กำลังดำเนินการ
					</div>
				</button>

				{/* Process 2 */}
				<button
					type="button"
					className="max-w-lg mx-auto flex flex-col items-center mb-1 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
				>
					<p className="font-semibold mb-3">การเซ็นสัญญา</p>

					<DocumentCheckIcon className="h-8 w-8" aria-hidden="true" />
					<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
						รอดำเนินการ
					</div>
				</button>

				{/* Process 3 */}
				<button
					type="button"
					className="max-w-lg mx-auto flex flex-col items-center mb-1 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
				>
					<p className="font-semibold mb-3">การสั่งซื้อ</p>
					<ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
					<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
						เสร็จสิ้น
					</div>
				</button>

				{/* Process 4 */}
				<button
					type="button"
					className="max-w-lg mx-auto flex flex-col items-center mb-1 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
				>
					<p className="font-semibold mb-3">การส่งมอบ</p>
					<TruckIcon className="h-8 w-8" aria-hidden="true" />
					<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
						เสร็จสิ้น
					</div>
				</button>

				{/* Process 5 */}
				<button
					type="button"
					className="max-w-lg mx-auto flex flex-col items-center mb-1 rounded-md bg-white px-2 py-2 text-sm text-sky-500 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
				>
					<p className="font-semibold mb-3">การชำระเงิน</p>
					<CurrencyDollarIcon className="h-8 w-8" aria-hidden="true" />
					<div className="w-28 text-sm rounded-full bg-sky-500 text-white mt-3 px-2 py-1 truncate">
						เสร็จสิ้น
					</div>
				</button>
			</div>
		</div>
	)
}
