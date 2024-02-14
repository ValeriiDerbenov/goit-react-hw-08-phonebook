import React from 'react'

// import { Navigate} from "react-router";
// import { signUp } from "../../redux/auth/auth-service";
import RegisterForm from 'components/RegisterForm/RegisterForm';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectAuthError, selectAuthLoading, selectIsLogin } from '../../redux/auth/auth-selectors';
// import { signup } from '../../redux/auth/auth-operations';


export default function RegisterPage() {
	// const authLoading = useSelector(selectAuthLoading);
	// const authError = useSelector(selectAuthError);
	// const isLogin = useSelector(selectIsLogin);

	// const dispatch = useDispatch();

	// const handleSignup = data => {
	// 		dispatch(signup(data));
	// }

	// if(isLogin) {
	// 		return <Navigate to="/login" /> 
	// }
	// const navigate = useNavigate();
	// const handleSubmit = (e) => {		
	// 	e.preventDefault()
	// 	const newUser = {
	// 		name: e.target.elements.name.value,
	// 		email: e.target.elements.email.value,
	// 		password: e.target.elements.password.value,
	// 	}
	// 	signUp(newUser)
	// 	.then(() => {
	// 		console.log('created')
	// 		navigate('/login')
	// 	})
	// 	.catch((error) => console.log(error))
	// }

	return(
		<div>
		<h2>Register Page</h2>
		<main>
            <h1>Please Sign Up</h1>
            {/* {authLoading && <p>....Register in progress</p>} */}
            <RegisterForm
						//  onSubmit={handleSignup} 
						 />
            {/* {authError && <p style={{color: "red"}}>{authError}</p>} */}
        </main>
		</div>
	);
}