export default function TaskCard() {
	const handleEdit = () => {
		// Add your edit functionality here
		console.log('Edit button clicked')
	}
	return (
		<div className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center">
			<div className="w-3/5 pr-6">
				<div className="mb-4">
					<p className="text-sm">ชื่องาน</p>
					<p className="text-sm">ชื่อหน่วยงาน</p>
					<p className="text-sm">งบ</p>
					<p className="text-sm">กำไร</p>
					<p className="text-sm">วันส่งมอบ</p>
				</div>
			</div>

			<div className="flex justify-between items-center space-x-5">
				{/* Button representing processes */}
				<button className="button flex flex-col items-center">
					<p className="font-semibold mb-1">การประมูล</p>
					<img
						src="process1-logo.png"
						alt="Process 1 Logo"
						className="w-12 h-12 mb-1 rounded-full"
					/>
					<p className="text-xs">In Progress</p>
				</button>
				{/* Repeat for each process */}
				{/* Process 2 */}
				<button className="button flex flex-col items-center">
					<p className="font-semibold mb-1">Process 2</p>
					<img
						src="process2-logo.png"
						alt="Process 2 Logo"
						className="w-12 h-12 mb-1 rounded-full"
					/>
					<p className="text-xs">Status: Completed</p>
				</button>
				{/* Process 3 */}
				<button className="button flex flex-col items-center">
					<p className="font-semibold mb-1">Process 3</p>
					<img
						src="process3-logo.png"
						alt="Process 3 Logo"
						className="w-12 h-12 mb-1 rounded-full"
					/>
					<p className="text-xs">Status: Pending</p>
				</button>
				{/* Process 4 */}
				<button className="button flex flex-col items-center">
					<p className="font-semibold mb-1">Process 4</p>
					<img
						src="process4-logo.png"
						alt="Process 4 Logo"
						className="w-12 h-12 mb-1 rounded-full"
					/>
					<p className="text-xs">Status: In Progress</p>
				</button>
				{/* Process 5 */}
				<button className="button flex flex-col items-center">
					<p className="font-semibold mb-1">Process 5</p>
					<img
						src="process5-logo.png"
						alt="Process 5 Logo"
						className="w-12 h-12 mb-1 rounded-full"
					/>
					<p className="text-xs">Status: Pending</p>
				</button>
			</div>
		</div>
	)
}
