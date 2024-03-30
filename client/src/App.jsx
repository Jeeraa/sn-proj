import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Header from './components/Header'
import SignIn from './pages/Signin'
import PrivateRoute from './components/PrivateRoute'
import CreateJob from './pages/CreateJob'
import AllUsers from './pages/AllUsers'
import EditProfileForAdmin from './pages/EditProfileForAdmin'
import AllJobs from './pages/AllJobs'
import EditJob from './pages/EditJob'
import History from './pages/History'

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/sign-in" element={<SignIn />}></Route>
				<Route element={<PrivateRoute />}>
					{/* <Route path="/history" element={<History />}></Route> */}
					{/* <Route path="/" element={<Home />}></Route> */}
					<Route path="/all-jobs" element={<AllJobs />}></Route>
					<Route path="/all-jobs/:jobId" element={<EditJob />}></Route>
					<Route path="/all-users" element={<AllUsers />}></Route>
					<Route path="/history" element={<History />}></Route>
					<Route path="/all-users/:userId" element={<EditProfileForAdmin />}></Route>
					<Route path="/sign-up" element={<SignUp />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/create-job" element={<CreateJob />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
