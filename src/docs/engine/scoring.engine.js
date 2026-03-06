export const scoreTasks = (tasks = []) => {

    return tasks.map(task => {

        let score = 0;

        if (task.priority === "high") score += 3;
        if (task.priority === "medium") score += 2;
        if (task.priority === "low") score += 1;

        return {
            ...task,
            score
        };

    }).sort((a, b) => b.score - a.score);

};