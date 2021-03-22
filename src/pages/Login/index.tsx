import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { LOGIN } from '../../stores/actions';
import {Field} from '../../components/Fields';
import MessageError from '../../components/MessageError';
import { REGEX } from '../../config/config';


const Login = () => {
	const user:any = useSelector((state) => state);
	const history = useHistory();
	const dispatch = useDispatch();
	
	useEffect(() => {
		if (user.isLogged) {
			history.push(`/`);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	const { errors, data, token, post } = useFetch();
	
	const handleLogin = (e:any) => {
		e.preventDefault();
		const logginUser = {
			user: {
				email: e.target.email.value,
				password: e.target.password.value
			}
		};

		post('/api/login', logginUser);
	}

	useEffect(() => {
		if (data) {
			dispatch({ type: LOGIN, data, token });
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const emailUpdate = (e:any) => {
		setEmail(e.target.value);
		if(!e.target.value.match(REGEX)){
			setEmailError("Veuillez renseigner un e-mail valide.");
		} else {
			setEmailError("");
		}
	}
	return(
		<section className="signup-form ">
			<div className="signup-container">
				<h2>Connexion</h2>
				<form onSubmit={handleLogin}>
					<div className="form-container">
						<div className="half">
							<Field label="Email" name="email" value={email} change={emailUpdate} error={emailError}/>
						</div>
					</div>
					<div className="form-container">
						<div className="half">
							<Field label="Password" password name="password"/>
						</div>

					</div>
					<div className="btn-container">
							<button type="submit" className={`btn ${
								emailError? "btn-error" : "" }`}>Se connecter</button>
					</div>
					
				</form>
				{errors && <MessageError message={errors}/>}
			</div>
		</section>
	)
}

export default Login;
