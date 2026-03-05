import Task from "../models/task.model.js";

export const createTaskService = async (data) => {
    return await Task.create(data);
};

export const getTasksService = async (projectId) => {
    return await Task.find({ project: projectId });
};

export const getTaskByIdService = async (id) => {
    return await Task.findById(id);
};

export const updateTaskService = async (id, data) => {
    return await Task.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTaskService = async (id) => {
    return await Task.findByIdAndDelete(id);
};