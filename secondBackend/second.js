const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/b0506')
    .then(() => console.log('connected to mongodb'))
    .catch((error) => console.log(error));

const patientenquirySchema = new mongoose.Schema({
    fullname: String,
    email: String,
    mobilenumber: String,
    writemessage: String,

})




const Persons = mongoose.model('Persons', patientenquirySchema)


app.post('/patients', async (req, res) => {
    try {
        const patient = new Persons(req.body);
        await patient.save();
        res.status(201).send(patient);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.get('/patients', async (req, res) => {
    try {
        const patient = await Persons.find();
        res.status(200).send(patient);
    } catch (error) {
        res.status(500).send(error)
    }


})

app.get('/patients/:id', async (req, res) => {
    try {
        const patient = await Persons.findById(req.params.id)
        res.status(200).json(patient)
    } catch (error) {
        res.status(500).send(error)
    }
})
app.delete('/patients/:id', async (req, res) => {
    try {
        await Persons.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "data deleted successfully" })
    } catch (error) {
        res.status(500).send(error)

    }
})


app.listen(5000, () => {
    console.log('5000 port is running')
})
