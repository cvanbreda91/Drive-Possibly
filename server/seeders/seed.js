const db = require('../config/connection');
const { Doctor, Patient, Drug, Appointment } = require('../models');
const doctorSeeds = require('./doctorSeeds.json');
const patientSeeds = require('./patientSeeds.json');
const drugSeeds = require('./drugSeeds.json');
const appointmentSeeds = require('./appointmentSeeds.json');

db.once('open', async () => {
    try {
      await Doctor.deleteMany({});
      await Patient.deleteMany({});
      await Drug.deleteMany({});
      await Appointment.deleteMany({});
  
      await Doctor.create(doctorSeeds);
  
    //   for (let i = 0; i < thoughtSeeds.length; i++) {
    //     const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    //     const user = await User.findOneAndUpdate(
    //       { username: thoughtAuthor },
    //       {
    //         $addToSet: {
    //           thoughts: _id,
    //         },
    //       }
    //     );
    //   }
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });