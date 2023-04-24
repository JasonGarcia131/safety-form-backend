const express = require("express");
const User = require("../model/User");

const getAllUsers = async (req, res) => {
        const users = await User.find().select("-password");
        if (!users) return res.status(204).json({ 'message': 'No users found' });
        res.json(users);
}

const getUser = async (req, res)=> {
    console.log("req", req.body)
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
}

module.exports = {
    getAllUsers,
    getUser    
}