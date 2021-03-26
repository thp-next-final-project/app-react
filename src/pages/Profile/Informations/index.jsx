import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { UPDATE } from '../../../stores/actions';
import {Field} from '../../../components/Fields';
import Alerts from '../../../components/Alerts'
import { set } from 'js-cookie';
import Select from 'react-select';




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
				objectif: objectif,
				sexe: sexe,
				activity: activity
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
			console.log(e.target.value)
				setObjectif(e.target.value);
				break;
			case "activity" : 
				setActivity(e.target.value);
				break;
			default : break;
		}
	
	};
	const choiceobjectif = [
		{
		  value: "slim",
		  label: "Perdre de poids"
		},
		{
			value: "maintain",
			label: "Maintenir ma forme"
		  },
		  {
			value: "build",
			label: "Me muscler"
		  },
	];

		
		
	const handleChangeObjectif = e => {
		setObjectif(e.value);
		
	}
	
	const choicesexe = [
		{
			value: "man",
			label: "Homme"
		},
		{
			value: "woman",
			label: "Femme"
		},
	];
	const handleChangeSexe = e => {
		setSexe(e.value);
	}

	const choiceactivity = [
		{
			value: "sedentary",
			label: "Sédentaire"
		},
		{
			value: "active",
			label: "Actif"
		},
		{
			value: "athletic",
			label: "Athletique"
		},
	];
	const handleChangeActivity = e => {
		setActivity(e.value);
	}

	
	return (
			<section className="update-informations-form">
				<div className="update-informations-container">
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
								<label>
									Etes-vous plutôt... ?
									<Select
										placeholder="Select Option"
										value={choiceactivity.find(obj => obj.value === activity)} // set selected value
										options={choiceactivity} // set list of the data
										onChange={handleChangeActivity} // assign onChange function
									/>
								</label>
							</div>
						</div>
						<div className="form-container">
							<div className="full">
								<label>
									Vous êtes... ?
									<Select
										placeholder="Select Option"
										value={choicesexe.find(obj => obj.value === sexe)} // set selected value
										options={choicesexe} // set list of the data
										onChange={handleChangeSexe} // assign onChange function
									/>
								</label>
							</div>
						</div>
						<div className="form-container">
							<div className="full">
								<label>
									Quel est votre objectif ?
									<Select
										placeholder="Select Option"
										value={choiceobjectif.find(obj => obj.value === objectif)} // set selected value
										options={choiceobjectif} // set list of the data
										onChange={handleChangeObjectif} // assign onChange function
									/>
								</label>
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

