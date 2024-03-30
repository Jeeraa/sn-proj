import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function CreateJob() {
	const [formData, setFormData] = useState({})
	const [error, setError] = useState(false)
	const navigate = useNavigate()

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			setError(false)
			const res = await fetch('/api/job/createJob', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
			const data = await res.json()

			if (data.success === false) {
				setError(true)
				return
			}
			navigate('/all-jobs')

			const jobId = data._id
			const processes = [
				{
					process: 'การประมูล',
					allowedRoles: ['ผู้บริหาร', 'ฝ่ายขาย'],
					status: 'รอดำเนินการ',
				},
				{
					process: 'การเซ็นสัญญา',
					allowedRoles: ['แอดมิน', 'ผู้บริหาร', 'ฝ่ายขาย'],
					status: '',
				},
				{
					process: 'การสั่งซื้อ',
					allowedRoles: ['แอดมิน', 'ผู้บริหาร', 'ฝ่ายบัญชี'],
					status: '',
				},
				{
					process: 'การส่งมอบ',
					allowedRoles: ['แอดมิน', 'ผู้บริหาร', 'ฝ่ายขาย'],
					status: '',
				},
				{
					process: 'การชำระเงิน',
					allowedRoles: ['แอดมิน', 'ผู้บริหาร', 'ฝ่ายบัญชี'],
					status: '',
				},
			]

			const res2 = await axios.post('/api/process/createprocess', {
				jobId,
				processes,
			})

			const data2 = await res2.data

			if (data2.success === false) {
				setError(true)
				return
			}

			// // const data2 = await res2.json()

			// if (data.success === false) {
			// 	setError(true)
			// 	return
			// }
			// navigate('/all-jobs')
		} catch (error) {
			setError(true)
		}
	}

	const handleCancel = async () => {
		navigate('/')
	}

	return (
		<div className="px-4 py-12 max-w-3xl mx-auto">
			<h1 className="text-xl font-bold mb-4 text-slate-700">
				เพิ่มรายละเอียดงานใหม่
			</h1>
			<div className="bg-sky-200 shadow-md rounded-lg p-3 flex justify-center items-center">
				<div className="">
					<form
						onSubmit={handleSubmit}
						className="m-2 flex flex-col gap-2 text-gray-900"
					>
						<div className="flex flex-row">
							<label className="mr-3 flex items-center">ชื่องาน</label>
							<input
								id="title"
								type="text"
								className=" bg-white rounded-lg p-3 mr-3 "
								onChange={handleChange}
							/>

							<label className="mr-3 flex items-center">ชื่อหน่วยงาน</label>
							<input
								id="company"
								type="text"
								className=" bg-white rounded-lg p-3 mr-3"
								onChange={handleChange}
							/>
						</div>
						<div className="flex flex-row mt-2">
							<label className="mr-3 flex items-center">งบ (บาท)</label>
							<input
								id="budget"
								type="number"
								className=" bg-white rounded-lg p-3 mr-3 "
								onChange={handleChange}
							/>
							<label className="mr-3 flex items-center">กำไร (บาท)</label>
							<input
								id="profit"
								type="number"
								className=" bg-white rounded-lg p-3 mr-3"
								onChange={handleChange}
							/>
						</div>
						<div className="flex flex-row mt-2">
							<label className="mr-3 flex items-center">วันส่งมอบ</label>
							<input
								id="dueDate"
								type="date"
								className=" bg-white rounded-lg p-3 mr-3 "
								onChange={handleChange}
							/>
							<label className="mr-3 flex items-center">ประเภทหน่วยงาน</label>
							<select
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
									id="description"
									rows={3}
									className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="flex justify-around mt-4">
							<button
								className="bg-red-500 text-white text-sm px-4 py-2 rounded-md shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
								onClick={handleCancel}
							>
								ยกเลิก
							</button>
							<button
								type="submit"
								className="bg-emerald-500 text-white text-sm px-4 py-2 rounded-md shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
							>
								บันทึก
							</button>
						</div>
					</form>
					<p className="text-red-700 mt-5">{error && 'Something Wrong!'}</p>
				</div>
			</div>
		</div>
	)
}
