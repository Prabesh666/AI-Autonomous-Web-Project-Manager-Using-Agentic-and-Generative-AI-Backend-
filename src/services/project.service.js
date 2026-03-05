import Project from "../models/project.model.js";

export const createProjectService = async (data) => {
    return await Project.create(data);
};

export const getProjectsService = async (userId) => {
    return await Project.find({ owner: userId });
};

export const getProjectByIdService = async (id) => {
    return await Project.findById(id);
};

export const updateProjectService = async (id, data) => {
    return await Project.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProjectService = async (id) => {
    return await Project.findByIdAndDelete(id);
};