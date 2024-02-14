import React from 'react'

import { useNavigate } from "react-router";
import { signUp } from "../../redux/auth/auth-service";
import RegisterForm from 'components/RegisterForm/RegisterForm';


export default function RegisterPage() {
	const navigate = useNavigate();
	const handleSubmit = (e) => {		
		e.preventDefault()
		const newUser = {
			name: e.target.elements.name.value,
			email: e.target.elements.email.value,
			password: e.target.elements.password.value,
			// avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867',
		}
		signUp(newUser)
		.then(() => {
			console.log('created')
			navigate('/login')
		})
		.catch((error) => console.log(error))
	}

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