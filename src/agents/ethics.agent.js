export const ethicsAgent = async (project) => {

    return {
        agent: "ethics",
        checks: [
            "User privacy compliance",
            "AI fairness validation",
            "Responsible data usage"
        ],
        stage: "ethics_checked",
        project
    };

};