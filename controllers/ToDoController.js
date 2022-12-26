const Category = require('../models/Category')
const ToDo = require('../models/ToDo')

const getAll = async(req,res,next) => {
    try {
        todos = await ToDo.find().populate('category')
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
        const isExist = await Category.find({_id:req.body.id})
        if(isExist.length > 0){
            await Category.findByIdAndUpdate(req.body.id, {$set : {name : req.body.name}},{
                new : true
            })
            return res.json({success:true, 'message' : `Category was updated!`})
        }
        return res.json({success:false, 'message' : `Cant find category`})
        
    } catch (error) {
        return res.json({success:false, 'message' : `${error.toString()}`})
    }
}


module.exports = {
    getAll,
    store,
    update
}