export const replanTasks = (tasks = [], failedTaskId) => {

    return tasks.map(task => {

        if (task.dependencies?.includes(failedTaskId)) {

            return {
                ...task,
                status: "blocked"
            };

        }

        return task;

    });

};