export const resolveDependencies = (tasks = []) => {

    const resolved = [];

    tasks.forEach(task => {

        if (!task.dependencies || task.dependencies.length === 0) {
            resolved.push(task);
        }

    });

    tasks.forEach(task => {

        if (task.dependencies && task.dependencies.length > 0) {
            resolved.push(task);
        }

    });

    return resolved;

};