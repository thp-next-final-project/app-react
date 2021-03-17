import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { LOGIN } from '../../stores/actions';
import MessageError from '../../components/MessageError';

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
				age: 2021 - e.target.age.value,
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

	return (
			<section className="signup-form">
				<h2>Register</h2>
				<form onSubmit={handleSubmit}>
					<label>Prénom</label>
					<input type="text" name="lastname"/>
					<label>Nom</label>
					<input type="text" name="firstname"/>
					<label>Email</label>
					<input type="email" name="email"/>
					<label>Mot de passe</label>
					<input type="password" name="password"/>
					<label>Année de naissance</label>
					<input type="year" name="age"/>
					<button type="submit">S'inscrire</button>
				</form>
				{errors && <MessageError message={errors}/>}

			</section>
	)
}

export default Register;