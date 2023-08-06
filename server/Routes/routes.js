import express from 'express';
import schema from '../Model/schema.js'

const router  = express.Router()

router.get('/all',async(req,res)=>{
    try{
        const list = await schema.find()
        res.send(list)
    }
    catch(err){
        res.status(501).send({message:'internal server error'})
    }
})
router.post('/addPatient',async(req,res)=>{
    try{
        const result = await schema.create(req.body)
        res.send({message:'data added successfully', result})
    }
    catch(err){
        res.status(501).send({message:'internal server error',error:err})
    }
})
router.put('/:patientId',async(req,res)=>{
    try{
        const {patientId} = req.params
        const result = await schema.findOneAndUpdate({_id:patientId},req.body)
        res.send({message:'data updated successfully', result})
    }
    catch(err){
        res.status(501).send({message:'internal server error'})
    }
})
router.delete('/:patientId',async(req,res)=>{
    try{
        const {patientId} = req.params
        const result = await schema.findOneAndDelete({_id:patientId})
        res.send({message:'data deleted successfully', result})
    }
    catch(err){
        res.status(501).send({message:'internal server error'})
    }
})

export default router