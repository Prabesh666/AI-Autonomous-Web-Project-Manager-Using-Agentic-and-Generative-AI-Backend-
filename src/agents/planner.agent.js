export const plannerAgent = async (project) => {

    return {
        agent: "planner",
        plan: [
            "Analyze requirements",
            "Design architecture",
            "Create roadmap"
        ],
        project,
        stage: "planned"
    };

};