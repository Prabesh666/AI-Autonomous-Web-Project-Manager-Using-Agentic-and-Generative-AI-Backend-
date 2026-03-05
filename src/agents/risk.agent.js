export const riskAgent = async (project) => {

    return {
        agent: "risk",
        risks: [
            "Security vulnerabilities",
            "Performance bottlenecks",
            "Deployment issues"
        ],
        stage: "risk_checked",
        project
    };

};