export const reportAgent = async (project) => {

    return {
        agent: "report",
        summary: "Project workflow completed",
        project
    };

};