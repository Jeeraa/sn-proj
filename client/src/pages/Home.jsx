import { DocumentPlusIcon } from '@heroicons/react/24/outline'
import TaskCard from '../components/TaskCard'

export default function Home() {
	return (
		<div className="px-4 py-12 max-w-6xl mx-auto">
			<div className="m-5 lg:ml-4 lg:mt-0 text-end">
				<span className="sm:ml-3">
					<a href="/addnewwork">
						<button
							type="button"
							className="inline-flex items-center rounded-md bg-red-400 px-3 py-2 text-sm text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
						>
							<DocumentPlusIcon
								className="-ml-0.5 mr-1.5 h-5 w-5"
								aria-hidden="true"
							/>
							เพิ่มงาน
						</button>
					</a>
				</span>
			</div>
			<h1 className="text-xl font-bold mb-4 text-slate-700">
				ติดตามความคืบหน้างาน
			</h1>
			<TaskCard />
		</div>
	)
}
