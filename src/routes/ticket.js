const express = require("express");
const router = express.Router();
const ticketModel = require("../models/ticket");//reference to ticket collection
const { getDocs, addDoc } = require("firebase/firestore");

// GET ALL
router.get("/ticket", async (req, res) => {
    const data = await getDocs(ticketModel);
    const dataParsed = data.docs.map((item) => (
        { 
            ID: item.id,
            ...item.data()
        }
    ));
    res.json(dataParsed);//shown in screen
})

// ADD
router.post("/ticket", async (req, res) => {
    const data = req.body;//content
    await addDoc(ticketModel, data);//creating new register
    res.send({msg: "ticket successfuly added"});//shown in screen
})

//UPDATE
	const focusOut = async () => {// custom updater for inputs live change 
		const [field, newValue, id] = editedData;
		console.log(field,newValue,id);

		const ticketDoc = doc(db, "ticket",id);
		const newField = {[field]: newValue};
		await updateDoc(ticketDoc,newField); 
		console.log("updated succesfully");
	}

module.exports = router;


