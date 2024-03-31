import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function Notification({ isshow, message }) {
	const [showNotification, setShowNotification] = useState(isshow)
	// console.log(message)

	useEffect(() => {
		setShowNotification(isshow)
	}, [isshow])

	const handleCloseNotification = () => {
		setShowNotification(false)
	}

	if (!showNotification) {
		return null
	}

	return (
		<div
			id="toast-top-right"
			className="fixed flex items-center w-full max-w-xs p-4 bg-white rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-red-700 space-x dark:bg-red-400"
			role="alert"
		>
			<div className="flex flex-col">
				{message.map((message, index) => (
					<li key={index} className="ms-3 text-sm text-white">
						{message}
					</li>
				))}
			</div>

			<button
				type="button"
				className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-red-800 dark:hover:text-white dark:bg-red-400 dark:hover:bg-red-400"
				data-dismiss-target="#toast-default"
				aria-label="Close"
				onClick={handleCloseNotification}
			>
				<span className="sr-only">Close</span>
				<svg
					className="w-3 h-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
			</button>
		</div>
	)
}

Notification.propTypes = {
	isshow: PropTypes.bool,
	message: PropTypes.arrayOf(PropTypes.string),
}
