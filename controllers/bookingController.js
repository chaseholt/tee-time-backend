const {bookingController} = require('../models');

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await bookingController.findAll();
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
    }
    exports.createBooking = async (req, res) => {
        try {
            const booking = await bookingController.create(req.body);
            res.status(201).json(booking);
        } catch (error) {
            console.error(error);
            res.status(400).send('Bad request');
        }
    };
// Compare this snippet from routes/teeTimeRoutes.js:
// const express = require('express');
// const router = express.Router();
// const teeTimeController = require('../controllers/teeTimeController');
//
// router.get('/', teeTimeController.getAllTeeTimes);
// router.post('/', teeTimeController.createTeeTime);
//
module.exports = router;
