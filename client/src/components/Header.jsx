import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import companyLogo from '../assets/company-logo.png'
import { useState, useEffect } from 'react'

const navigation = [
	{ name: 'ติดตามความคืบหน้า', link: '/all-jobs', isSelected: false },
	{ name: 'รายการงานย้อนหลัง', link: '/history', isSelected: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Header() {
	const [isAdmin, setIsAdmin] = useState(false)
	const { currentUser } = useSelector((state) => state.user)

	useEffect(() => {
		setIsAdmin(currentUser?.role === 'แอดมิน')
	}, [currentUser])

	const updatedNavigation = isAdmin
		? [{ name: 'กำหนดสิทธิ์การเข้าถึง', link: '/all-users', isSelected: false }]
		: navigation

	return (
		<div className="bg-sky-500">
			<div className="flex justify-between items-center max-w-6xl mx-auto p-3">
				<div className="flex items-center">
					<img className="h-8 w-auto" src={companyLogo} alt="companyLogo" />
					<div className="hidden sm:ml-6 sm:block">
						<div className="flex space-x-4">
							{updatedNavigation.map((item) => (
								<Link
									key={item.name}
									to={item.link}
									className={classNames(
										item.isSelected
											? 'bg-gray-900 text-white'
											: 'text-white hover:bg-gray-700 hover:text-white',
										'rounded-md px-3 py-2 text-sm font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				</div>

				<Link to="/profile">
					{currentUser ? (
						<img
							src={currentUser.profilePicture}
							alt="profile"
							className="h-7 w-7 rounded-full object-cover"
						></img>
					) : (
						''
					)}
				</Link>
			</div>
		</div>
	)
}
