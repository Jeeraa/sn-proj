import { useState, useEffect } from 'react'
import { UserPlusIcon } from '@heroicons/react/24/outline'
import UserCard from '../components/UserCard'

export default function AllUsers() {
	const [users, setUsers] = useState([])

	// Fetch user data from the server
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('/api/user/allusers')
				const data = await response.json()
				setUsers(data)
			} catch (error) {
				console.error('Error fetching user data:', error)
			}
		}

		fetchUsers()
	}, [])

	return (
		<div className="px-4 py-12 max-w-6xl mx-auto">
			<div className="m-5 lg:ml-4 lg:mt-0 text-end">
				<span className="sm:ml-3">
					<a href="/sign-up">
						<button
							type="button"
							className="inline-flex items-center rounded-md bg-red-400 px-3 py-2 text-sm text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
						>
							<UserPlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
							เพิ่มบัญชีผู้ใช้งาน
						</button>
					</a>
				</span>
			</div>
			<h1 className="text-xl font-bold mb-4 text-slate-700">
				บัญชีผู้ใช้งานทั้งหมด
			</h1>
			{users.map((user, index) => (
				<UserCard
					key={index}
					userId={user._id}
					name={user.name}
					lastName={user.lastname}
					email={user.email}
					role={user.role}
				/>
			))}
		</div>
	)
}
