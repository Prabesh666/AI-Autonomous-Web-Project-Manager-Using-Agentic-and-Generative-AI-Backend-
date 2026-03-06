import { plannerAgent } from "../agents/planner.agent.js";
import { taskAgent } from "../agents/task.agent.js";
import { riskAgent } from "../agents/risk.agent.js";
import { ethicsAgent } from "../agents/ethics.agent.js";
import { reportAgent } from "../agents/report.agent.js";
import { healthAgent } from "../agents/health.agent.js";
import { applyRules } from "../docs/engine/rule_engine.js";
import { resolveDependencies } from "../docs/engine/dependency.engine.js";
import { scoreTasks } from "../docs/engine/scoring.engine.js";
import { replanTasks } from "../docs/engine/replanning.engine.js";

export const runAgentService = async (type, payload = {}) => {

    try {

        let nextAgent = type;

        // Step 1: Decision Engine determines next agent
        if (type === "decision") {
            nextAgent = applyRules(payload);
        }

        // Step 2: Dependency resolution (task ordering)
        if (Array.isArray(payload.tasks)) {
            payload.tasks = resolveDependencies(payload.tasks);
        }

        // Step 3: Task scoring / prioritization
        if (Array.isArray(payload.tasks)) {
            payload.tasks = scoreTasks(payload.tasks);
        }

        // Step 4: Replanning if a task failed
        if (payload.failedTaskId && Array.isArray(payload.tasks)) {
            payload.tasks = replanTasks(payload.tasks, payload.failedTaskId);
        }

        // Step 5: Execute selected agent
        switch (nextAgent) {

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
                throw new Error(`Unknown agent type: ${nextAgent}`);

        }

    } catch (error) {

        console.error("Agent execution error:", error);

        throw new Error(`Agent execution failed: ${error.message}`);

    }

};