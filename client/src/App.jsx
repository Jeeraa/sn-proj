import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Header from './components/Header'
import SignIn from './pages/Signin'
import PrivateRoute from './components/PrivateRoute'
import CreateJob from './pages/CreateJob'
import AllUsers from './pages/AllUsers'

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/sign-in" element={<SignIn />}></Route>
				<Route element={<PrivateRoute />}>
					<Route path="/about" element={<About />}></Route>
					<Route path="/" element={<Home />}></Route>
					<Route path="/all-users" element={<AllUsers />}></Route>
					<Route path="/sign-up" element={<SignUp />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/create-job" element={<CreateJob />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
