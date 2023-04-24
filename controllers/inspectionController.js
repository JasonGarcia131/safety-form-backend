const express = require("express");
const router = express.Router();
const Inspection = require("../model/Inspection");

const getAllInspections = async (req, res) => {
    try {
        const inspections = await Inspection.find();
        if (!inspections) return res.status(204).json({ 'message': 'No inspections found' });
        res.json(inspections);
    } catch (e) {
        console.log(e)
    }
}

const getInspectionsByUsername = async (req, res) => {
    const {submittedBy} = req.params;
    console.log("by username", submittedBy)
    try{
        const inspections = await Inspection.find({
                submittedBy: submittedBy

        });
        if (!inspections) return res.status(204).json({ 'message': 'No inspections found' });
        res.json(inspections);
    }catch(e){
        console.log(e)
    }
}

const getInspectionById = async (req, res)=> {
    console.log("req.params", req.params)
    try{
        const {_id} = req.params
        console.log("by id", _id)
        if (!_id) return res.status(400).json({ "message": 'User ID required' });
        const inspection = await Inspection.findOne({_id: _id});
        if (!inspection) {
            return res.status(204).json({ 'message': `Inspection ID ${_id} not found` });
        }
        res.json(inspection);
    }catch(e){
        console.log(e)
    }
}

const submitInspection = async (req, res) => {

    try {
        const response = await Inspection.create({
            "submittedBy": req.body.submittedBy,
            "questions": req.body.questions,
            "employees": req.body.employees
        });
        console.log("response in backedn", response);
        res.status(201).json({ 'success': `New inspection created!` });
    } catch (e) {
        console.log(e);
    }

}

module.exports = {
    getAllInspections,
    getInspectionById,
    getInspectionsByUsername,
    submitInspection
}
