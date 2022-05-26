import { useState, useEffect } from 'react';
// import axios from "axios";
import { getProjectDetailsService } from '../services/project.services';

import { Link, useParams } from 'react-router-dom';
import AddTask from '../components/AddTask';

import TaskCard from '../components/TaskCard';

const API_URL = process.env.REACT_APP_API_URL;

function ProjectDetailsPage(props) {
	const [ project, setProject ] = useState(null);
	const { id } = useParams();
	//const projectId = props.match.params.id;
	const projectId = id;

	const getProject = async () => {
		//console.log(id)
		// Get the token from the localStorage
		//const storedToken = localStorage.getItem('authToken');
		const storedToken = localStorage.getItem('authToken');
		try {
			const response = await getProjectDetailsService(id);
			setProject(response.data);
		} catch (err) {
			console.log(err);
		}

		// Send the token through the request "Authorization" Headers

		// axios
		//   .get(
		//     `${API_URL}/projects/${projectId}`,
		//     { headers: { Authorization: `Bearer ${storedToken}` } }
		//   )
		//   .then((response) => {
		//     const oneProject = response.data;
		//     console.log(oneProject)
		//     setProject(oneProject);
		//   })
		//   .catch((error) => console.log(error));
	};

	useEffect(() => {
		getProject();
	}, []);

	return (
		<div className="ProjectDetails">
			{project && (
				<div>
					<h1>Project: {project.title}</h1>
					<p>Description: {project.description}</p>
				</div>
			)}

			<AddTask refreshProject={getProject} projectId={projectId} />

			{project &&
				project.tasks.map((task) => {
					return <TaskCard key={task._id} {...task} />;
				})}

			<Link to="/projects">
				<button>Back to projects</button>
			</Link>

			<Link to={`/projects/edit/${projectId}`}>
				<button>Edit Project</button>
			</Link>
		</div>
	);
}

export default ProjectDetailsPage;
