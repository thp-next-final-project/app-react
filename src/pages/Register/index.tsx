import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { LOGIN } from '../../stores/actions';
import MessageError from '../../components/MessageError';
import {Field} from '../../components/fields/index';

const Register = () => {
	const user:any = useSelector((state) => state);
	const history = useHistory();
	const dispatch = useDispatch();
	
	useEffect(() => {
		if (user.isLogged) {
			history.push('/profile');
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	const { errors, data, token, post} = useFetch();


	const handleSubmit = (e:any) => {
		e.preventDefault();	
		console.log(e.target)
		const createUser = {
			user: {
				firstname: e.target.firstname.value,
				lastname: e.target.lastname.value,
				email: e.target.email.value,
				password: e.target.password.value,
			}
		};

		post('/api/signup', createUser);
	}
	
	useEffect(() => {
		if (data) {
			dispatch({ type: LOGIN, data, token});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);	
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const emailUpdate = (e:any) => {
		setEmail(e.target.value);
		const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!e.target.value.match(regex)){
			setEmailError("Veuillez renseigner un e-mail valide.");
		} else {
			setEmailError("");
		}
	}
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const updatePassword = (e:any) => {
		setPassword(e.target.value);
		if(e.target.value.length < 6){
			setPasswordError("veuillez renseigner un mot de passe d'au moins 6 caracteres");
		} else {
			setPasswordError("");
		}
		console.log(e.target.value);
		
	}
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [passwordConfirmationError, setPasswordConfirmationError] = useState("");
	const updatePasswordConfirmation = (e:any) => {
		setPasswordConfirmation(e.target.value);
		if(e.target.value != password){
			setPasswordConfirmationError("Le mot de passe et sa confirmation doivent etre identiques");
		} else {
			setPasswordConfirmationError("");
		}
		
	}
	return (
			<section className="signup-form">
				<h2>Register</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-container">
						<div className="half">
							<Field label="Prénom" name="firstname"/>
						</div>
						<div className="half">
							<Field label="Nom" name="lastname"/>
						</div>
					</div>
					<div className="form-container">
						<div className="full">
							<Field label="Email" name="email" value={email} change={emailUpdate} error={emailError} />
						</div>
					</div>
					<div className="form-container">
						<div className="half">
							<Field label="Mot de passe" password name="password" value={password} change={updatePassword} error={passwordError} />
						</div>
						<div className="half">
							<Field label="Confirmation du mot de passe" password value={passwordConfirmation} change={updatePasswordConfirmation} error={passwordConfirmationError}/>
						</div>
					</div>
					<div className="btn-container">
						<button type="submit" className={`btn ${
							emailError||
							passwordError||
							passwordConfirmationError?
							"btn-error"
							:
							""
						}`}>S'inscrire</button>
					</div>
				</form>
				{errors && <MessageError message={errors}/>}

			</section>
	)
}

export default Register;