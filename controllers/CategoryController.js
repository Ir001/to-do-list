const Category = require('../models/Category')

const store = async(req,res,next) => {
    if(Object.keys(req.body).length == 0){
        res.status(400).json({success:false, 'message' : 'Data cant be empty!'})
    }
    try {
        const isExist = await Category.find({name:req.body.name})
        if(isExist.length > 0){
            return res.json({success:false, 'message' : `Category already exist!`})
        }
        const category = {
            'name' : req.body.name,
            'created_at' : Date()
        }
        await Category.create(category)
        res.json({success:true, 'message' : `Category was added!`})
    } catch (error) {
        res.json({success:false, 'message' : `${error.toString()}`})
    }
    res.end()
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
    store,
    update
}