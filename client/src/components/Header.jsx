import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import companyLogo from '../assets/company-logo.png'
import { useState } from 'react'
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const navigation = [
	{ name: 'ติดตามความคืบหน้า', link: '/all-jobs', isSelected: false },
	{ name: 'รายการงานย้อนหลัง', link: '/history', isSelected: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const handleClick = (item) => {}

export default function Header() {
	const [isSelected, setIsSelected] = useState(false)
	const { currentUser } = useSelector((state) => state.user)

	// Check if the current user has the "admin" role
	const isAdmin = currentUser?.role === 'แอดมิน'

	// Add the "กำหนดสิทธิการเข้าถึง" link to the navigation array if the user is an admin
	if (isAdmin) {
		navigation.push({
			name: 'กำหนดสิทธิการเข้าถึง',
			link: '/all-users',
			isSelected: false,
		})
	}

	return (
		<div className="bg-sky-500">
			<div className="flex justify-between items-center max-w-6xl mx-auto p-3">
				<div className="flex items-center">
					<Link to="/">
						<img className="h-8 w-auto" src={companyLogo} alt="companyLogo" />
					</Link>
					<div className="hidden sm:ml-6 sm:block">
						<div className="flex space-x-4">
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.link}
									onClick={handleClick(item.isSelected)}
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
					{/* <ul className="flex gap-4 ml-4">
						<Link to="/">
							<li>Home</li>
						</Link>
						<Link to="/about">
							<li>About</li>
						</Link>
					</ul> */}
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
