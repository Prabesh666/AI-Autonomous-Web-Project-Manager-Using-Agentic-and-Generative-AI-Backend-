export const decisionAgent = async (context) => {

    let nextAgent = null;

    switch (context.stage) {

        case "start":
            nextAgent = "planner";
            break;

        case "planned":
            nextAgent = "task";
            break;

        case "tasks_created":
            nextAgent = "risk";
            break;

        case "risk_checked":
            nextAgent = "ethics";
            break;

        case "ethics_checked":
            nextAgent = "report";
            break;

        default:
            nextAgent = "health";
    }

    return {
        agent: "decision",
        nextAgent,
        context
    };

};