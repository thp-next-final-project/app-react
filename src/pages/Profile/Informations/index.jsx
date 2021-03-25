import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { UPDATE } from '../../../stores/actions';
import {Field} from '../../../components/Fields';
import Alerts from '../../../components/Alerts'
import { set } from 'js-cookie';


const ProfileInformations = () => {

	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector((state) => state);
	const { responseData:userdata, get, isLoading:isloadingdata} = useFetch(true);
	const [age, setAge] = useState();
	const [weight, setWeight] = useState();
	const [height, setHeight] = useState();
	const [sexe, setSexe] = useState();
	const [objectif, setObjectif] = useState();
	const [activity, setActivity] = useState();


	useEffect(() => {
		get(`/api/users/${user.id}`)
	}, [])

	useEffect(() => {
		console.log(userdata)
		if (!userdata?.data?.attributes)  {
			return
		}
		
		const { sexe, age, objectif, weight, height, activity} = userdata.data.attributes;

		setAge(age)
		setActivity(activity)
		setHeight(height)
		setWeight(weight)
		setObjectif(objectif)
		setSexe(sexe)
		
	}, [userdata])
	
	const { responseData, patch, isLoading} = useFetch(true);



	const handleSubmit = (e) => {
		e.preventDefault();	
		console.log(e.target)
		const updateUser = {
			user: {
				age: e.target.age.value,
				weight: e.target.weight.value,
				height: e.target.height.value,
				objectif: e.target.objectif.value,
				sexe: e.target.objectif.value,
				activity: e.target.objectif.value
			}
		};

		patch(`/api/users/${user.id}`, updateUser);

	}


	const handleOnChange = (e) => {
		console.log(age)
		console.log(e.target.value)
		

		switch (e.target.name) {
			case "age" : 
				setAge(e.target.value);
				break;
			case "sexe" : 
				setSexe(e.target.value);
				break;
			case "weight" : 
				setWeight(e.target.value);
				break;
			case "height" : 
				setHeight(e.target.value);
				break;
			case "objectif" : 
				setObjectif(e.target.value);
				break;
			case "activity" : 
				setActivity(e.target.value);
				break;
			default : break;
		}
	
	};

	
	return (
			<section className="signup-form">
				<div className="signup-container">
					<h2>Modifier mes paramètres</h2>
					<form onSubmit={handleSubmit} onChange={handleOnChange}>
						<div className="form-container">
							<div className="full">
								<Field label="Age" name="age" value={age} />
							</div>
						</div>
						<div className="form-container">
							<div className="full">
								<Field label="Taille" name="height" value={height} />
							</div>
						</div>
						<div className="form-container">
							<div className="full">
								<Field label="Poids" name="weight" value={weight} />
							</div>
						</div>
						<div className="form-container">
							<div className="full">
								<Field label="Activité" name="activity" value={activity} />
							</div>
						</div>
						<div className="form-container">
							<div className="full">
								<Field label="Objectif" name="objectif" value={objectif} />
							</div>
						</div>

						 
						<div className="btn-container">
							<button type="submit" className="btn">Modifier</button>
						</div>   
					</form>
					{isLoading && <Alerts type={"success"} message={"Les paramètres ont été modifiés"}/>
					
						}

				</div>

			</section>
	)

}

export default ProfileInformations;

