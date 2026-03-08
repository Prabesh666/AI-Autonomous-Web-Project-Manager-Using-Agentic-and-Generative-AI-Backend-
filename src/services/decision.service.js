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

export const runAgentService = async (type, payload) => {

  if (type === "rule") {

    const nextAgent = applyRules(payload);

    return {
      engine: "rule",
      nextAgent
    };

  }

  if (type === "scoring") {

    const result = scoreTasks(payload.tasks);

    return {
      engine: "scoring",
      result
    };

  }

  if (type === "replanning") {

    const result = replanTasks(payload.tasks, payload.failedTaskId);

    return {
      engine: "replanning",
      result
    };

  }

  if (type === "dependency") {

    const result = resolveDependencies(payload.tasks);

    return {
      engine: "dependency",
      result
    };

  }

  switch (type) {

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

    default:
      throw new Error("Unknown agent or engine type");

  }

};