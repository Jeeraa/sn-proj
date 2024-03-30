import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentUser: null,
	loading: false,
	error: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signInStart: (state) => {
			state.loading = true
		},
		signInSuccess: (state, action) => {
			state.currentUser = action.payload
			state.loading = false
			state.error = false
		},
		signInFailure: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		updateUserStart: (state) => {
			state.loading = true
		},
		updateUserSuccess: (state, action) => {
			state.currentUser = action.payload
			state.loading = false
			state.error = false
		},
		updateUserFailure: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		deleteUserStart: (state) => {
			state.loading = true
		},
		deleteUserSuccess: (state) => {
			state.currentUser = null
			state.loading = false
			state.error = false
		},
		deleteUserFailure: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		signOut: (state) => {
			state.currentUser = null
			state.loading = false
			state.error = false
		},
		updateJobStart: (state) => {
			state.loading = true
		},
		updateJobSuccess: (state, action) => {
			state.currentUser = action.payload
			state.loading = false
			state.error = false
		},
		updateJobFailure: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		deleteJobStart: (state) => {
			state.loading = true
		},
		deleteJobSuccess: (state) => {
			state.currentUser = null
			state.loading = false
			state.error = false
		},
		deleteJobFailure: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		deleteProcessStart: (state) => {
			state.loading = true
		},
		deleteProcessSuccess: (state) => {
			state.currentUser = null
			state.loading = false
			state.error = false
		},
		deleteProcessFailure: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const {
	signInStart,
	signInSuccess,
	signInFailure,
	updateUserStart,
	updateUserSuccess,
	updateUserFailure,
	deleteUserStart,
	deleteUserSuccess,
	deleteUserFailure,
	updateJobStart,
	updateJobSuccess,
	updateJobFailure,
	deleteJobStart,
	deleteJobSuccess,
	deleteJobFailure,
	signOut,
	deleteProcessStart,
	deleteProcessSuccess,
	deleteProcessFailure,
} = userSlice.actions

export default userSlice.reducer
