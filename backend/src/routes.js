const express = require('express');
const { celebrate, Joi } = require('celebrate');

const multer = require('multer');
const multerConfig = require('./config/multer');

const ProjectsController = require('./controllers/ProjectsController');

const routes = express.Router();
const upload = multer(multerConfig);

const projectsController = new ProjectsController();

routes.post(
    '/projects',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            description: Joi.string().required().email(),
            giturl: Joi.string().required(),
            techs: Joi.string().required(),
        }),
    }, {
        abortEarly: false,
    }),
    projectsController.create
);

export default routes;