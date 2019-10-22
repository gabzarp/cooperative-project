const logger = require('koa-logger');
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const project = require('./controllers/project');
const projectEvaluation = require('./controllers/project_evaluation');
const mongo = require('koa-mongo')
const app = new Koa();
app.use(mongo({
  host: 'localhost',
  port: 27017,
  user: 'admin',
  db: 'project-module',
  authSource: 'admin',
  max: 100,
  min: 1
}));

const router = new Router();

app.use(bodyParser());

app.use(logger());

router.post('/project', project.createProject)
      .get('/project/:id', project.getProjectById)
      .delete('/project/:id', project.deleteProject)
      
      .post('/project_evaluation/:id', projectEvaluation.createProject )
      .put('/project_evaluation/:id', projectEvaluation.updateProject );

app.use(router.routes());

app.listen(3001);