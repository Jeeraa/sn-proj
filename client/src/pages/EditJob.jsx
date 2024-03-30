import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import {
	updateJobStart,
	updateJobSuccess,
	updateJobFailure,
	deleteJobStart,
	deleteJobSuccess,
	deleteJobFailure,
	deleteProcessStart,
	deleteProcessSuccess,
	deleteProcessFailure,
} from '../redux/user/userSlice'

export default function EditJob() {
	const { jobId } = useParams()
	const { processId } = useParams()
	const navigate = useNavigate()
	const [formData, setFormData] = useState({})
	const [formData2, setFormData2] = useState({})
	const [updateSuccess, setUpdateSuccess] = useState(false)
	const { error, currentUser } = useSelector((state) => state.user)
	const dispatch = useDispatch()
	const isBoss = currentUser.role === 'แอดมิน'

	useEffect(() => {
		const fetchJobData = async () => {
			try {
				const response = await fetch(`/api/job/alljobs/${jobId}`)
				const jobData = await response.json({})
				if (jobData.dueDate) {
					const formattedDueDate = new Date(jobData.dueDate)
						.toISOString()
						.split('T')[0]
					jobData.dueDate = formattedDueDate
				}
				setFormData(jobData) // Populate form data with user data
			} catch (error) {
				console.error('Error fetching user data:', error)
			}
		}

		fetchJobData()
	}, [jobId])

	useEffect(() => {
		const fetchProcessData = async () => {
			try {
				const response = await fetch(`/api/process/allprocess/${processId}`)
				const processData = await response.json({})
				setFormData2(processData)
			} catch (error) {
				console.error('Error fetching user data:', error)
			}
		}

		fetchProcessData()
	}, [processId])

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value })
	}

	const handleSubmit = async () => {
		if (!isBoss) {
			console.error("You do not have permission to edit other users' data.")
			return
		}

		try {
			dispatch(updateJobStart())
			const res = await fetch(`/api/job/updatejob/${jobId}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
			const data = await res.json()
			if (data.success === false) {
				dispatch(updateJobFailure(data))
				return
			}
			dispatch(updateJobSuccess(data))
			setUpdateSuccess(true)
			navigate('/all-jobs')
		} catch (error) {
			dispatch(updateJobFailure(error))
		}
	}

	const handleDelete = async () => {
		if (!isBoss) {
			console.error("You do not have permission to delete other users' accounts.")
			return
		}

		try {
			dispatch(deleteJobStart())
			dispatch(deleteProcessStart())

			// Delete the job
			const res = await fetch(`/api/job/deletejob/${jobId}`, {
				method: 'DELETE',
			})
			const data = await res.json()

			if (data.success === false) {
				dispatch(deleteJobFailure(data))
				return
			}

			// Delete the associated processes
			const res2 = await fetch(`/api/process/deleteprocess/${processId}`, {
				method: 'DELETE',
			})
			const data2 = await res2.json()

			if (data2.success === false) {
				dispatch(deleteProcessFailure(data2))
				return
			}

			dispatch(deleteJobSuccess(data))
			dispatch(deleteProcessSuccess(data2))
			navigate('/all-jobs')
		} catch (error) {
			dispatch(deleteJobFailure(error))
			dispatch(deleteProcessFailure(error))
		}
	}

	return (
		<div className="px-4 py-12 max-w-3xl mx-auto">
			<h1 className="text-xl font-bold mb-4 text-slate-700">แก้ไขรายละเอียดงาน</h1>
			<div className="bg-sky-200 shadow-md rounded-lg p-3 flex justify-center items-center">
				<div className="">
					<form
						onSubmit={handleSubmit}
						className="m-2 flex flex-col gap-2 text-gray-900"
					>
						<div className="flex flex-row">
							<label className="mr-3 flex items-center">ชื่องาน</label>
							<input
								defaultValue={formData.title}
								id="title"
								type="text"
								className=" bg-white rounded-lg p-3 mr-3 "
								onChange={handleChange}
							/>

							<label className="mr-3 flex items-center">ชื่อหน่วยงาน</label>
							<input
								defaultValue={formData.company}
								id="company"
								type="text"
								className=" bg-white rounded-lg p-3 mr-3"
								onChange={handleChange}
							/>
						</div>
						<div className="flex flex-row mt-2">
							<label className="mr-3 flex items-center">งบ (บาท)</label>
							<input
								defaultValue={formData.budget}
								id="budget"
								type="number"
								className=" bg-white rounded-lg p-3 mr-3 "
								onChange={handleChange}
							/>
							<label className="mr-3 flex items-center">กำไร (บาท)</label>
							<input
								defaultValue={formData.profit}
								id="profit"
								type="number"
								className=" bg-white rounded-lg p-3 mr-3"
								onChange={handleChange}
							/>
						</div>
						<div className="flex flex-row mt-2">
							<label className="mr-3 flex items-center">วันส่งมอบ</label>
							<input
								defaultValue={formData.dueDate}
								id="dueDate"
								type="date"
								className=" bg-white rounded-lg p-3 mr-3 "
								onChange={handleChange}
							/>
							<label className="mr-3 flex items-center">ประเภทหน่วยงาน</label>
							<select
								defaultValue={formData.companyType}
								id="companyType"
								className="p-3 rounded-lg"
								onChange={handleChange}
							>
								<option value="">เลือกประเภท</option>
								<option value="รัฐบาล">รัฐบาล</option>
								<option value="เอกชน">เอกชน</option>
							</select>
						</div>

						<div className="mt-2">
							<label className="mr-3 flex items-center">รายละเอียดงาน</label>
							<div className="mt-2 ">
								<textarea
									defaultValue={formData.description}
									id="description"
									rows={3}
									className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
							{/* <Link to={`/all-jobs`} className="block"> */}
							<button
								onClick={handleSubmit}
								className="w-full h-full bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
							>
								อัปเดตข้อมูล
							</button>
							{/* </Link> */}
						</div>

						<div className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
							{/* <Link to={`/all-jobs`} className="block"> */}
							<button
								onClick={handleDelete}
								className="w-full h-full bg-red-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
							>
								ลบงาน
							</button>
							{/* </Link> */}
						</div>
					</form>
					<p className="text-red-700 mt-5">{error && 'Something Wrong!'}</p>
					<p className="text-green-700 mt-5 ">
						{updateSuccess && 'User is updated successfully'}
					</p>
				</div>
			</div>
		</div>
	)
}
