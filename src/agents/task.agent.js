export const taskAgent = async (project) => {

    return {
        agent: "task",
        tasks: [
            "Build backend APIs",
            "Build frontend UI",
            "Setup database"
        ],
        project,
        stage: "tasks_created"
    };

};