const Category = require('../models/Category')
const ToDo = require('../models/ToDo')

const index = async(req,res,next) => {
    try {
        console.log(req.userId)
        todos = await ToDo.find({user:req.userId}).populate('category')
        return res.json({success:true, data : todos})
    } catch (error) {
        return res.json({success:false, 'message' : `${error.toString()}`})
    }
}
const store = async(req,res,next) => {
    if(Object.keys(req.body).length == 0){
        return res.status(400).json({success:false, 'message' : 'Data cant be empty!'})
    }
    try {
        // const category = Category.find({_id : req.body.category_id})
        const todo = {
            'user' : req.userId,
            'name' : req.body.name,
            'is_complete' : false,
            'created_at' : Date(),
            'category' : req.body.category_id
        }
        await ToDo.create(todo)
        return res.json({success:true, 'message' : `To Do List was added!`})
    } catch (error) {
        return res.json({success:false, 'message' : `${error.toString()}`})
    }
}
const update = async(req,res,next) => {
    if(Object.keys(req.body).length == 0){
        res.status(400).json({success:false, 'message' : 'Data cant be empty!'})
    }
    try {
        const isExist = await ToDo.find({_id:req.body.id, user : req.userId})
        if(isExist.length > 0){
            await ToDo.findByIdAndUpdate(req.body.id, {$set : {name : req.body.name, category : req.categoryId}},{
                new : true
            })
            return res.json({success:true, 'message' : `To Do List was updated!`})
        }
        return res.json({success:false, 'message' : `Cant find to do list`})
        
    } catch (error) {
        return res.json({success:false, 'message' : `${error.toString()}`})
    }
}


module.exports = {
    index,
    store,
    update
}