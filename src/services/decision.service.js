import { plannerAgent } from "../agents/planner.agent.js";
import { taskAgent } from "../agents/task.agent.js";
import { riskAgent } from "../agents/risk.agent.js";
import { ethicsAgent } from "../agents/ethics.agent.js";
import { reportAgent } from "../agents/report.agent.js";
import { healthAgent } from "../agents/health.agent.js";
import { decisionAgent } from "../agents/decision.agent.js";

export const runAgentService = async (type, payload) => {

    switch (type) {

        case "decision":
            return await decisionAgent(payload);

        case "planner":
            return await plannerAgent(payload);

        case "task":
            return await taskAgent(payload);

        case "risk":
            return await riskAgent(payload);

        case "ethics":
            return await ethicsAgent(payload);

        case "report":
            return await reportAgent(payload);

        case "health":
            return await healthAgent(payload);

        default:
            throw new Error("Unknown agent type");

    }

};