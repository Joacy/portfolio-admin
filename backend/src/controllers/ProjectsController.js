const knex = require('../database/connection');

class ProjectsController {
    async index (request, response) {
        
    };

    async show (request, response) {
        
    };

    async create (request, response) {
        const {
            name,
            description,
            giturl,
            techs,
        } = request.body;

        const trx = await knex.transaction();

        const project = {
            image: request.file.filename,
            name,
            description,
            giturl,
            techs,
        };

        const insertedIds = await trx('projects').insert(project);

        const project_id = insertedIds[0];

        await trx.commit();

        return response.json({
            id: project_id,
            ...project,
        });
    };
};

export default ProjectsController;