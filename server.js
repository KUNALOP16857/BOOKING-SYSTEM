const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/appointments', { useNewUrlParser: true, useUnifiedTopology: true });
const Appointment = mongoose.model('Appointment', {
    name: String,
    date: Date
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/bookAppointment', (req, res) => {
    const { name, date } = req.body;
    
    const appointment = new Appointment({
        name: name,
        date: new Date(date)
    });

    appointment.save()
        .then(() => {
            res.status(200).json({ message: 'Appointment booked successfully!' });
        })
        .catch(err => {
            console.error('Error saving appointment:', err);
            res.status(500).json({ message: 'Failed to book appointment' });
        });
});

app.listen(port, () => {
    console.log(Server is running on http://localhost:${port});
});
