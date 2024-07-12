const express=require("express");
const paycontroller=require("../controllers/paymentcontroller");
const { Route } = require("express");

const router= express.Router();
router.post("/payment",paycontroller.paystripe)