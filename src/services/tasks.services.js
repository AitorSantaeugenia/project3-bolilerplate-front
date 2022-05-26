import service from './service';

const URL = '/tasks';

//add new task
const addNewTaskService = (newTask) => {
	return service.post(`${URL}/`, newTask);
};

// //get all tasks - Check1
// const getAllTasksService = (id) => {
// 	return service.get(`${URL}/${id}`);
// };

//delete task - Check2
const deleteTaskService = (id) => {
	return service.delete(`${URL}/${id}`);
};

//update task - Check3
const updateTaskService = (id, updatedTask) => {
	return service.put(`${URL}/${id}`, updatedTask);
};

export { addNewTaskService, deleteTaskService, updateTaskService };
