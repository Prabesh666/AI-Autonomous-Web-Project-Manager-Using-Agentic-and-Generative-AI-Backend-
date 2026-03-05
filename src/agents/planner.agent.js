export const plannerAgent = async (project) => {

    return {
        agent: "planner",
        plan: [
            "Analyze project requirements",
            "Design architecture",
            "Create development roadmap"
        ],
        stage: "planned",
        project
    };

};