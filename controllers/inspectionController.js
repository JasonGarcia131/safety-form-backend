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

router.get("/:username", async (req, res) => {
    console.log("params", req.params)
    const {username} = req.params;
    try{
        const inspections = await Inspection.find({
                username: username

        });
        if (!inspections) return res.status(204).json({ 'message': 'No inspections found' });
        res.json(inspections);
    }catch(e){
        console.log(e)
    }
});

router.post("/submit", async (req, res) => {
    console.log("req.body", req.body);
    try {
        const response = await Inspection.create({
            "username": req.body.team,
            "date": req.body.input[0],
            "region": req.body.input[1],
            "subContractor": req.body.input[2],
            "generalForeman": req.body.input[3],
            "memberName1": req.body.input[4],
            "memberId1": req.body.input[5],
            "memberName2": req.body.input[6],
            "memberId2": req.body.input[7],
            "truckId": req.body.input[8],
            "chipperId": req.body.input[9],
            "section": req.body.input[10],
            "zone": req.body.input[11],
            "itemNumber": req.body.input[12],
            "location": req.body.input[13],
            "safetyQuestion1": req.body.radio[0],
            "safetyQuestion2": req.body.radio[1],
            "safetyQuestion3": req.body.radio[2],
            "safetyQuestion4": req.body.radio[3],
            "safetyQuestion5": req.body.radio[4],
            "safetyQuestion6": req.body.radio[5],
            "safetyQuestion7": req.body.radio[6],
            "safetyQuestion8": req.body.radio[7],
            "safetyQuestion9": req.body.radio[8],
            "safetyQuestion10": req.body.radio[9],
            "safetyQuestion11": req.body.radio[10],
            "safetyQuestion12": req.body.radio[11],
            "safetyQuestion13": req.body.radio[12],
            "safetyQuestion14": req.body.radio[13],
            "safetyQuestion15": req.body.radio[14],
            "safetyQuestion16": req.body.radio[15],
            "employee1": {
                "name": req.body.employee1,
                "title": req.body.title1,
                "consent": req.body.consent1
            },
            "employee2": {
                "name": req.body.employee2,
                "title": req.body.title2,
                "consent": req.body.consent2
            },
            "employee3": {
                "name": req.body.employee3,
                "title": req.body.title3,
                "consent": req.body.consent3
            },
            "manager": req.body.manager,
            "timeIn": req.body.timeIn,
            "timeOut": req.body.timeOut,
            "comments": req.body.textbox,
            "imageOne": req.body.imageOne,
            "imageTwo": req.body.imageTwo
        });
        console.log("response in backedn", response);
        res.status(201).json({ 'success': `New inspection created!` });
    } catch (e) {
        console.log(e);
    }

})

module.exports = router;