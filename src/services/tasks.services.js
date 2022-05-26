import service from './service';

const URL = '/tasks';

//add new task
const addNewTaskService = (newTask) => {
	return service.post(`${URL}/`, newTask);
};

//get all tasks
const getAllTasksService = () => {
	return service.get(`${URL}/`);
};

const getTasksDetailsService = (id) => {
	return service.get(`${URL}/${id}`);
};

export { getAllTasksService, addNewTaskService };
