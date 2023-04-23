const express = require("express");
const router = express.Router();
const Inspection = require("../models/Inspection");

router.get("/all", async (req, res) => {
    try {
        const inspections = await Inspection.find();
        if (!inspections) return res.status(204).json({ 'message': 'No inspections found' });
        res.json(inspections);
    } catch (e) {
        console.log(e)
    }
});

router.get("/:submittedBy", async (req, res) => {
    const {submittedBy} = req.params;
    console.log("submittedBy", submittedBy)
    try{
        const inspections = await Inspection.find({
                submittedBy: submittedBy

        });
        if (!inspections) return res.status(204).json({ 'message': 'No inspections found' });
        res.json(inspections);
    }catch(e){
        console.log(e)
    }
});

router.get("/inspectionById/:_id", async (req, res)=> {
    try{
        const {_id} = req.params
        console.log("id", _id)
        if (!_id) return res.status(400).json({ "message": 'User ID required' });
        const inspection = await Inspection.findOne({_id: _id});
        if (!inspection) {
            return res.status(204).json({ 'message': `Inspection ID ${_id} not found` });
        }
        res.json(inspection);
    }catch(e){
        console.log(e)
    }
})


router.post("/submit", async (req, res) => {

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

})

module.exports = router;