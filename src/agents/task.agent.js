export const taskAgent = async (project) => {

    return {
        agent: "task",
        tasks: [
            "Build backend APIs",
            "Create frontend UI",
            "Setup database"
        ],
        stage: "tasks_created",
        project
    };

};