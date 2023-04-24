const express = require('express');
const router = express.Router();
const inspectionController = require('../controllers/inspectionController');
const ROLES_LIST = require('../config/roles_list');
const verifyRoles = require('../middleware/verifyRoles');
const verifyJWT = require("../middleware/verifyJWT");

router.route('/all')
    .get([verifyJWT,verifyRoles(ROLES_LIST.Admin)], inspectionController.getAllInspections)

router.route('/user/:submittedBy')
    .get([verifyJWT,verifyRoles(ROLES_LIST.Admin)],inspectionController.getInspectionsByUsername)

router.route('/id/:_id')
    .get([verifyJWT,verifyRoles(ROLES_LIST.Admin)],inspectionController.getInspectionById)

router.route("/submit")
.post([verifyJWT,verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User)],inspectionController.submitInspection)

module.exports = router;