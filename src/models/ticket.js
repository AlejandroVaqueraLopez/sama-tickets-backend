//make the collection references
const { collection } = require("firebase/firestore");
const db = require("../config/config");

//ticket collection reference
const ticketModel = collection(db, "TICKET");

module.exports = ticketModel;