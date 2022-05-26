import { useState } from 'react';
import axios from 'axios';
import { addNewProjectService } from '../services/project.services.js';

const API_URL = process.env.REACT_APP_API_URL;

function AddProject(props) {
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newProject = { title, description };

		// Get the token from the localStorage
		// const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		try {
			await addNewProjectService(newProject);
			setTitle('');
			setDescription('');
		} catch (err) {
			console.log(err);
		}

		// axios
		// 	.post(`${API_URL}/projects`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
		// 	.then((response) => {
		// 		// Reset the state
		// 		setTitle('');
		// 		setDescription('');
		// 		props.refreshProjects();
		// 	})
		// 	.catch((error) => console.log(error));
	};

	return (
		<div className="AddProject">
			<h3>Add Project</h3>

			<form onSubmit={handleSubmit}>
				<label>Title:</label>
				<input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

				<label>Description:</label>
				<textarea
					type="text"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default AddProject;
