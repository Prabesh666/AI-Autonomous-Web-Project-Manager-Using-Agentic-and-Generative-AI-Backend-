export const applyRules = (context = {}) => {

    const { stage } = context;

    switch (stage) {

        case "start":
            return "planner";

        case "planned":
            return "task";

        case "tasks_created":
            return "risk";

        case "risk_checked":
            return "ethics";

        case "ethics_checked":
            return "report";

        default:
            return "health";

    }

};