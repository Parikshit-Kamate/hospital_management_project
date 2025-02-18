const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/b0506')
    .then(() => console.log('connected to mongodb'))
    .catch((error) => console.log(error));

const patientSchema = new mongoose.Schema({
    fullname: String,
    phonenumber: String,
    doctor: String,
    fees: String,
    appointmentdate: String,
    writemessage: String,
    gender: String
});

const Patients = mongoose.model('Patients', patientSchema);

app.post('/patients', async (req, res) => {
    try {
        const patient = new Patients(req.body);
        await patient.save();
        res.status(201).send(patient);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/patients', async (req, res) => {
    try {
        const patient = await Patients.find();
        res.status(200).send(patient);
    } catch (error) {
        res.status(500).send(error);
    }
});

// NEW: GET single patient by id
app.get('/patients/:id', async (req, res) => {
    try {
        const patient = await Patients.findById(req.params.id);
        if (!patient) {
            return res.status(404).send({ error: 'Patient not found' });
        }
        res.status(200).send(patient);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/patients/:id', async (req, res) => {
    try {
        const updatePatient = await Patients.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatePatient);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('/patients/:id', async (req, res)=> {
    try {
        await Patients.findByIdAndDelete(req.params.id)
        res.status(200).json({message : "data deleted successfully"})
    }catch(error){
        res.status(500).send(error)

    }
})

app.listen(8080, () => {
    console.log('8080 port is running');
});
