export const ethicsAgent = async (project) => {

    return {
        agent: "ethics",
        checks: [
            "User data privacy",
            "AI transparency",
            "Fair usage"
        ],
        project,
        stage: "ethics_checked"
    };

};