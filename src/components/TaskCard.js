// We are deconstructing the props object directly in the parentheses of the function
import axios from 'axios';
import React, { useState } from 'react';

import { updateTaskService, deleteTaskService } from '../services/tasks.services';

function TaskCard({ title, description, _id }) {
	const [ inputTitle, setInputTitle ] = useState(title);
	const [ inputDescription, setInputDescription ] = useState(description);
	const [ isDeleted, setIsDeleted ] = useState(false);
	const API_URL = process.env.REACT_APP_API_URL;
	const storedToken = localStorage.getItem('authToken');
	const idTask = _id;

	const handleSubmitTask = async (e) => {
		try {
			const requestBody = { inputTitle, inputDescription };

			const response = await updateTaskService(idTask, requestBody);
			// Reset the state to clear the inputs
			// setProject(response.data);
			console.log('Updated task', requestBody);
		} catch (err) {
			console.log(err);
		}
		// axios
		// 	.put(
		// 		`${API_URL}/tasks/${_id}`,
		// 		{
		// 			title: inputTitle,
		// 			description: inputDescription
		// 		},
		// 		{ headers: { Authorization: `Bearer ${storedToken}` } }
		// 	)
		// 	.then((response) => {
		// 		console.log(response.data);
		// 	});
	};

	const handleDeleteTask = async (e) => {
		try {
			const response = await deleteTaskService(idTask);
			setIsDeleted(true);
		} catch (err) {
			console.log(err);
		}
		// axios
		// 	.delete(`${API_URL}/tasks/${_id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
		// 	.then((response) => {
		// 		setIsDeleted(true);
		// 	});
	};

	return (
		<div>
			{!isDeleted && (
				<div className="TaskCard card">
					<p>Task</p>
					<input
						value={inputTitle}
						onChange={(e) => {
							setInputTitle(e.target.value);
						}}
					/>
					<input
						value={inputDescription}
						onChange={(e) => {
							setInputDescription(e.target.value);
						}}
					/>
					<button onClick={handleSubmitTask}>Modificar</button>
					<button onClick={handleDeleteTask}>Eliminar</button>
				</div>
			)}
		</div>
	);
}

export default TaskCard;
