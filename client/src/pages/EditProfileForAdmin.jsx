import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
	updateUserStart,
	updateUserSuccess,
	updateUserFailure,
	deleteUserStart,
	deleteUserSuccess,
	deleteUserFailure,
} from '../redux/user/userSlice'

export default function EditProfileForAdmin() {
	const { userId } = useParams()
	const [formData, setFormData] = useState({})
	const [updateSuccess, setUpdateSuccess] = useState(false)
	const { error, currentUser } = useSelector((state) => state.user)
	const dispatch = useDispatch()
	const isAdmin = currentUser.role === 'แอดมิน'

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await fetch(`/api/user/allusers/${userId}`)
				const userData = await response.json()
				setFormData(userData) // Populate form data with user data
			} catch (error) {
				console.error('Error fetching user data:', error)
			}
		}

		fetchUserData()
	}, [userId])

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!isAdmin) {
			console.error("You do not have permission to edit other users' data.")
			return
		}

		try {
			dispatch(updateUserStart())
			const res = await fetch(`/api/user/update/${userId}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
			const data = await res.json()
			if (data.success === false) {
				dispatch(updateUserFailure(data))
				return
			}
			dispatch(updateUserSuccess(data))
			setUpdateSuccess(true)
		} catch (error) {
			dispatch(updateUserFailure(error))
		}
	}

	const handleDeleteAccount = async () => {
		if (!isAdmin) {
			console.error("You do not have permission to delete other users' accounts.")
			return
		}
		try {
			dispatch(deleteUserStart())
			const res = await fetch(`/api/user/delete/${userId}`, {
				method: 'DELETE',
			})
			const data = await res.json()
			if (data.success === false) {
				dispatch(deleteUserFailure(data))
				return
			}
			dispatch(deleteUserSuccess(data))
			Navigate('/all-users')
		} catch (error) {
			dispatch(deleteUserFailure(error))
		}
	}

	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-2xl font-semibold text-center my-7">
				แก้ไขข้อมูลบัญชีผู้ใช้
			</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input
					defaultValue={formData.name}
					id="name"
					type="text"
					placeholder="ชื่อ"
					className="bg-slate-100 rounded-lg p-3"
					onChange={handleChange}
				/>
				<input
					defaultValue={formData.lastname}
					id="lastname"
					type="text"
					placeholder="นามสกุล"
					className="bg-slate-100 rounded-lg p-3"
					onChange={handleChange}
				/>
				<input
					defaultValue={formData.email}
					id="email"
					type="email"
					placeholder="E-mail"
					className="bg-slate-100 rounded-lg p-3"
					onChange={handleChange}
				/>{' '}
				<select
					defaultValue={formData.role}
					id="role"
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				>
					<option value="">เลือกบทบาท</option>
					<option value="ผู้บริหาร">ผู้บริหาร</option>
					<option value="ฝ่ายขาย">ฝ่ายขาย</option>
					<option value="ฝ่ายบัญชี">ฝ่ายบัญชี</option>
					<option value="แอดมิน">แอดมิน</option>
				</select>
				<input
					defaultValue={formData.username}
					id="username"
					type="text"
					placeholder="Username"
					className="bg-slate-100 rounded-lg p-3"
					onChange={handleChange}
				/>
				<input
					id="password"
					type="password"
					placeholder="Password"
					className="bg-slate-100 rounded-lg p-3"
					onChange={handleChange}
				/>
				<button
					type="submit"
					className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
				>
					อัปเดตข้อมูล
				</button>
				<button
					onClick={handleDeleteAccount}
					className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
				>
					ลบบัญชี
				</button>
			</form>
			<p className="text-red-700 mt-5 ">{error && 'Something Wrong!'}</p>
			<p className="text-green-700 mt-5 ">
				{updateSuccess && 'User is updated successfully'}
			</p>
		</div>
	)
}
