// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router"

import LoginForm from "components/LoginForm/LoginForm";

export default function LoginPage() {
	// const isAuth = useSelector((state) => state.auth.access_token)
	// const dispatch = useDispatch()
	// const navigate = useNavigate()

	// useEffect(() => {
	// 	isAuth && navigate('/')
	// }, [isAuth, navigate])

	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	dispatch(
	// 		loginThunk({
	// 			email: e.target.elements.email.value,
	// 			password: e.target.elements.password.value,
	// 		})
	// 	)
	// }
	return(
		<div>
			<h2>Login Page</h2>
			{/* {authLoading && <p>....Login in progress</p>} */}
      <LoginForm
			//  onSubmit={handleLogin}
			  />
      {/* {authError && <p style={{color: "red"}}>{authError}</p>} */}
		</div>
	);
}