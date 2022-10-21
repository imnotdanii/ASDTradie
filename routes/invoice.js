let express = require('express');
let router = express.Router();
let uniqid = require('uniqid');
const Invoice = require('../models/invoice-model').Invoice;
let ServiceRequest = require('../models/serviceRequests-model').ServiceRequest;
let Service = require('../models/services-model').Service;
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth');


router.get('/billingForm', ensureAuthenticated, (req, res)=> {
//Get serviceRequest where service request customer id = current session id
    ServiceRequest.findOne({customerID : req.session.userID}).then(serviceRequest => { 
        console.log(serviceRequest)
        if(serviceRequest){
            res.render('billingForm.ejs', {serviceRequest});
        }
        
    })
    .catch(err => console.log(err))
})


router.get('/orderHistory', ensureAuthenticated, (req, res)=> {
    Invoice.find({}, function(err, invoices){
        res.render('orderHistory', {
            invoiceList: invoices
        })
    })  
})

router.get('/workHistory', ensureAuthenticated, (req, res)=> {
    Invoice.find({}, function(err, invoices){
        res.render('workHistory', {
            invoiceList: invoices
        })
    })
        

})


router.post('/billingForm',  ensureAuthenticated, async (req, res) =>{
    //const { invRequestID, invServiceID, invCustomerID, invTradieID, invAddress, invDate, invPrice, invPaid} = req.body;
    const { service_requestID, service_title , userID , first_name , last_name , tradieID , hours , street_address , phone_number, city, state, post_code, price, cardNumber, cardName, expiry, verification } = req.body;
    var errors = []; //Error messages

    //Check required fields
    if(!first_name || !last_name || !street_address || !phone_number || !city || !state || !post_code|| !cardNumber|| !cardName || !expiry || !verification){
        errors.push({msg: 'Please fill in all fields'});
    }
    else{
    const newInvoice = new Invoice({
        service_requestID,
        service_title, 
        userID, 
        first_name,
        last_name,
        tradieID, 
        hours,
        street_address,
        date: new Date(), 
        phone_number,
        city,
        state, 
        post_code,
        price 
    });

    
    await newInvoice.save()
    .then(newInvoice =>{
        res.render('invoiceGen.ejs', {invoice: newInvoice});
    })

    .catch(err => console.log(err))
    }
})





module.exports = router;


