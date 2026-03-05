import Project from "../models/project.model.js";

export const createProject = async (req, res) => {
    try {

        const project = await Project.create({
            ...req.body,
            owner: req.user._id
        });

        res.status(201).json({
            success: true,
            project
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProjects = async (req, res) => {
    try {

        const projects = await Project.find({ owner: req.user._id });

        res.json({
            success: true,
            projects
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProjectById = async (req, res) => {
    try {

        const project = await Project.findById(req.params.id);

        res.json(project);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProject = async (req, res) => {
    try {

        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(project);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteProject = async (req, res) => {
    try {

        await Project.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Project deleted"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};