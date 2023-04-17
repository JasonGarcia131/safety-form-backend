const express = require("express");
const router = express.Router();
const User = require("../models/User");


router.get("/all", async (req, res) => {
    try{
        const users = await User.find().select("-password");
        if (!users) return res.status(204).json({ 'message': 'No users found' });
        res.json(users);
    }catch(e)
});

router.get("/:id", async (req, res)=> {
    try{
        const id = objectId(req.params.id);
        if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
        const user = await User.findOne({_id: id}).select("-password").select("-roles").exec();
        if (!user) {
            return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
        }
        res.json(user);
    }catch(e){
        console.log(e)
    }
})