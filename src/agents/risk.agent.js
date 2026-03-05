export const riskAgent = async (project) => {

    return {
        agent: "risk",
        risks: [
            "Security vulnerability",
            "Performance bottleneck",
            "Deployment failure"
        ],
        project,
        stage: "risk_checked"
    };

};