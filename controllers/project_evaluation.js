const mongo = require('koa-mongo')

const projectEvaluation = {
    createEvaluation: (ctx) =>{
        return ctx.db.collection('project').updateOne({"_id": mongo.ObjectID(ctx.params.id)} , { $push :  { 'project_evaluation' : ctx.request.body } })
        .then((results)=>{
            ctx.body = results;
            ctx.status = 200;
        })
        .catch(err =>{ctx.body = 'error: ' + err; ctx.status = 500;})
    },
    updateEvaluation: (ctx) =>{
        return ctx.db.collection('project').updateOne({"_id": mongo.ObjectID(ctx.params.id)} , { $pull :  { 'project_evaluation' : ctx.request.body } })
        .then((results)=>{
            ctx.body = results;
            ctx.status = 200;
        })
        .catch(err =>{ctx.body = 'error: ' + err; ctx.status = 500;})
    }
}
module.exports = projectEvaluation;
