export default function AddNewTask() {
	return (
		<div className="px-4 py-12 max-w-3xl mx-auto">
			<h1 className="text-xl font-bold mb-4 text-slate-700">
				เพิ่มรายละเอียดงานใหม่
			</h1>
			<div className="bg-sky-200 shadow-md rounded-lg p-3 flex justify-center items-center">
				<div className="">
					<form className="m-2 flex flex-col gap-2 text-gray-900">
						<div className="flex flex-row">
							<label className="mr-3 flex items-center">ชื่องาน</label>
							<input
								id="taskname"
								type="text"
								className=" bg-white rounded-lg p-3 mr-3 "
								onChange={''}
							/>

							<label className="mr-3 flex items-center">ชื่อหน่วยงาน</label>
							<input
								id="taskcompany"
								type="text"
								className=" bg-white rounded-lg p-3 mr-3"
								onChange={''}
							/>
						</div>
						<div className="flex flex-row mt-2">
							<label className="mr-3 flex items-center">งบ (บาท)</label>
							<input
								id="budget"
								type="text"
								className=" bg-white rounded-lg p-3 mr-3 "
								onChange={''}
							/>
							<label className="mr-3 flex items-center">กำไร (บาท)</label>
							<input
								id="profit"
								type="text"
								className=" bg-white rounded-lg p-3 mr-3"
								onChange={''}
							/>
						</div>
						<div className="flex flex-row mt-2">
							<label className="mr-3 flex items-center">วันส่งมอบ</label>
							<input
								id="budget"
								type="text"
								className=" bg-white rounded-lg p-3 mr-3 "
								onChange={''}
							/>
						</div>

						<div className="mt-2">
							<fieldset>
								<legend className="mr-3 flex items-center">ประเภทหน่วยงาน</legend>
								<div className="sm:row-span-2 flex items-center gap-x-3 justify-around">
									<div className="flex items-center gap-x-3">
										<input
											id="gov"
											name="gov"
											type="checkbox"
											className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
										/>
										<label htmlFor="gov" className="mr-3 flex items-center">
											รัฐบาล
										</label>
									</div>

									<div className="flex items-center gap-x-3">
										<input
											id="private"
											name="private"
											type="checkbox"
											className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
										/>
										<label htmlFor="private" className="mr-3 flex items-center">
											เอกชน
										</label>
									</div>
								</div>
							</fieldset>
						</div>

						<div className="mt-2">
							<label className="mr-3 flex items-center">รายละเอียดงาน</label>
							<div className="mt-2">
								<textarea
									id="detail"
									name="detail"
									rows={3}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									defaultValue={''}
								/>
							</div>
						</div>

						<div className="flex justify-around mt-4">
							<button
								type="button"
								className="bg-red-500 text-white text-sm px-4 py-2 rounded-md shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
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
				</div>
			</div>
			{/* <div className="w-full max-w-lg px-10 py-8 mx-auto bg-blue-200 rounded-lg shadow-xl">
				<div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						<div className="sm:col-span-2">
							<label className="block text-sm font-semibold leading-6  text-gray-900">
								ชื่องาน
							</label>
							<div className="mt-2">
								<input
									id="workname"
									name="workname"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label className="block text-sm font-semibold leading-6  text-gray-900">
								ชื่อหน่วยงาน
							</label>
							<div className="mt-2">
								<input
									id="company"
									name="company"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<fieldset>
								<legend className="mb-3 text-sm font-semibold leading-6 text-gray-900">
									ประเภทหน่วยงาน
								</legend>
								<div className="sm:row-span-2 flex items-center gap-x-3 justify-around">
									<div className="flex items-center gap-x-3">
										<input
											id="gov"
											name="gov"
											type="radio"
											className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
										/>
										<label
											htmlFor="gov"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											รัฐบาล
										</label>
									</div>

									<div className="flex items-center gap-x-3">
										<input
											id="private"
											name="private"
											type="radio"
											className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
										/>
										<label
											htmlFor="private"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											เอกชน
										</label>
									</div>
								</div>
							</fieldset>
						</div>

						<div className="sm:col-span-2">
							<label className="block text-sm font-semibold leading-6  text-gray-900">
								รายละเอียดงาน
							</label>
							<div className="mt-2">
								<textarea
									id="detail"
									name="detail"
									rows={3}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									defaultValue={''}
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label className="block text-sm font-semibold leading-6  text-gray-900">
								งบ (บาท)
							</label>
							<div className="mt-2">
								<input
									id="budget"
									name="budget"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label className="block text-sm font-semibold leading-6  text-gray-900">
								กำไร (บาท)
							</label>
							<div className="mt-2">
								<input
									id="profit"
									name="profit"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="mt-6 flex items-center justify-around gap-x-6">
							<button
								type="button"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								ยกเลิก
							</button>
							<button
								type="submit"
								className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								บันทึก
							</button>
						</div>
					</form>
				</div>
			</div> */}
		</div>
	)
}
