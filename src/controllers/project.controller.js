import mongoose from "mongoose";
import Project from "../models/project.model.js";


// CREATE PROJECT
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
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



// GET ALL PROJECTS
export const getProjects = async (req, res) => {
    try {

        const projects = await Project.find({ owner: req.user._id });

        res.status(200).json({
            success: true,
            count: projects.length,
            projects
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



// GET SINGLE PROJECT
export const getProjectById = async (req, res) => {
    try {

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid project ID"
            });
        }

        const project = await Project.findOne({
            _id: id,
            owner: req.user._id
        });

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        res.status(200).json({
            success: true,
            project
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



// UPDATE PROJECT
export const updateProject = async (req, res) => {
    try {

        const { id } = req.params;

        const project = await Project.findOneAndUpdate(
            { _id: id, owner: req.user._id },
            req.body,
            { new: true, runValidators: true }
        );

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        res.status(200).json({
            success: true,
            project
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



// DELETE PROJECT
export const deleteProject = async (req, res) => {
    try {

        const { id } = req.params;

        const project = await Project.findOneAndDelete({
            _id: id,
            owner: req.user._id
        });

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Project deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};