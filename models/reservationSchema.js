import mongoose from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name should be at least 3 characters"],
        maxLength: [30, "First name should not be more than 30 characters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name should be at least 3 characters"],
        maxLength: [30, "Last name should not be more than 30 characters"],

    },


    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email address"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number should be at least 10 characters"],
        maxLength: [10, "Phone number should not be more than 10 characters"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});


export const Reservation = mongoose.model("Reservation", reservationSchema);