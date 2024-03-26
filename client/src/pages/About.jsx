import UserCard from '../components/UserCard'

export default function About() {
	return (
		<div className="px-4 py-12 max-w-6xl mx-auto">
			<div className="m-5 lg:ml-4 lg:mt-0 text-end">
				<span className="sm:ml-3">
					<a href="/sign-up"></a>
				</span>
			</div>
			<h1 className="text-xl font-bold mb-4 text-slate-700">รายการงานย้อนหลัง</h1>
			<UserCard />
		</div>
	)
}
