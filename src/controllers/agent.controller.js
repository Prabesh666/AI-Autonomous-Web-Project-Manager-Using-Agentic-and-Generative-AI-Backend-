import { runAgentService } from "../services/decision.service.js";

export const runAgent = async (req, res, next) => {

    try {

        const { type, payload } = req.body;

        const result = await runAgentService(type, payload);

        res.status(200).json({
            success: true,
            result
        });

    } catch (error) {
        next(error);
    }

};  