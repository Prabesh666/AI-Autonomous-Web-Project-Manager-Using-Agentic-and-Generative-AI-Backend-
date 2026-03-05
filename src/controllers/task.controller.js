import {
    createTaskService,
    getTasksService,
    getTaskByIdService,
    updateTaskService,
    deleteTaskService
} from "../services/task.service.js";

export const createTask = async (req, res) => {
    try {

        const task = await createTaskService(req.body);

        res.status(201).json({
            success: true,
            task
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTasks = async (req, res) => {
    try {

        const tasks = await getTasksService(req.params.projectId);

        res.json({
            success: true,
            tasks
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTaskById = async (req, res) => {
    try {

        const task = await getTaskByIdService(req.params.id);

        res.json(task);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTask = async (req, res) => {
    try {

        const task = await updateTaskService(
            req.params.id,
            req.body
        );

        res.json(task);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteTask = async (req, res) => {
    try {

        await deleteTaskService(req.params.id);

        res.json({
            success: true,
            message: "Task deleted"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};