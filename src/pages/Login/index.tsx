import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { LOGIN } from '../../stores/actions';
import MessageError from '../../components/MessageError';


const Login = () => {
	const user:any = useSelector((state) => state);
	const history = useHistory();
	const dispatch = useDispatch();
	
	useEffect(() => {
		if (user.isLogged) {
			history.push(`/profile`);
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

	return(
		<section className="signup-form ">
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<label>Email</label>
				<input type="email" name="email"/>
				<label>Mot de passe</label>
				<input type="password" name="password"/>
				<button type="submit">Se connecter</button>
			</form>
			{errors && <MessageError message={errors}/>}
		</section>
	)
}

export default Login;
