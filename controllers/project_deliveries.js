const mongo = require('koa-mongo')

const projectDeliveries = {
    createDelivery: (ctx) =>{
        return ctx.db.collection('project').updateOne({"_id": mongo.ObjectID(ctx.params.id)} , { $push :  { 'project_deliveries' : ctx.request.body } })
        .then((results)=>{
            ctx.body = results;
            ctx.status = 200;
        })
        .catch(err =>{ctx.body = 'error: ' + err; ctx.status = 500;})
    },
    updateDelivery: (ctx) =>{
        return ctx.db.collection('project').updateOne({"_id": mongo.ObjectID(ctx.params.id)} , { $pull :  { 'project_deliveries' : ctx.request.body } })
        .then((results)=>{
            ctx.body = results;
            ctx.status = 200;
        })
        .catch(err =>{ctx.body = 'error: ' + err; ctx.status = 500;})
    }
}
module.exports = projectDeliveries;