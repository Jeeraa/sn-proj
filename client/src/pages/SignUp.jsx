import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import OAuth from '../components/OAuth'

export default function SignUp() {
	const [formData, setFormData] = useState({})
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			setLoading(true)
			setError(false)
			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
			const data = await res.json()
			setLoading(false)
			if (data.success === false) {
				setError(true)
				return
			}
			navigate('/all-users')
		} catch (error) {
			setLoading(false)
			setError(true)
		}
	}
	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">
				ลงทะเบียนผู้ใช้งาน
			</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input
					type="text"
					placeholder="ชื่อ"
					id="name"
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="นามสกุล"
					id="lastname"
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				/>

				<input
					type="email"
					placeholder="E-mail"
					id="email"
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				/>
				<select
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
					type="text"
					placeholder="Username"
					id="username"
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="Password"
					id="password"
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				/>
				<button
					disabled={loading}
					className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
				>
					{loading ? 'Loading...' : 'ลงทะเบียน'}
				</button>
				{/* <OAuth /> */}
			</form>
			{/* <div className="flex gap-2 mt-5">
				<p>Have an account?</p>
				<Link to="/sign-in">
					<span className="text-blue-500">Sign In</span>
				</Link>
			</div> */}
			<p className="text-red-700 mt-5">{error && 'Something wrong!'}</p>
		</div>
	)
}
