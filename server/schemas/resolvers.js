const { Appointment, Doctor, Patient, Order, Drug } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const resolvers = {
    Query: {
        doctors: async () => {
            return Doctor.find().sort();
        },
        // appointments:async(parent)=>{ 
        //     const params = {             
        //     }
        // }
    },
    Mutation: {
        addDoctor: async (parent, args) => {
            const doctor = await Doctor.create(args);
            const token = signToken(doctor);

            return { token, doctor };
        },
        addOrder: async (parent, { drugs }, context) => {
            console.log(context);
            if (context.doctor) {
                const order = new Order({ drugs });

                await Doctor.findByIdAndUpdate(context.doctor._id, { $push: { orders: order } });

                return order;
            }

            throw new AuthenticationError('Not logged in');
        },
        updateDoctor: async (parent, args, context) => {
            if (context.doctor) {
                return await Doctor.findByIdAndUpdate(context.doctor._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        updateDrug: async (parent, { _id, inventory }) => {
            const decrement = Math.abs(inventory) * -1;

            return await Drug.findByIdAndUpdate(_id, { $inc: { inventory: decrement } }, { new: true });
        },
        addPatient: async (parent, args, context) => {
            if (context.doctor) {
                const patient = await Patient.create({ ...args, email: context.doctor.email });

                await Doctor.findByIdAndUpdate(
                    { _id: context.doctor._id },
                    { $push: { patients: patient._id } },
                    { new: true }
                );

                return patient;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addNote: async () => {

        },

        login: async (parent, { email, password }) => {
            const doctor = await Doctor.findOne({ email });

            if (!doctor) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await doctor.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(doctor);

            return { token, doctor };
        }


    }
}
module.exports = resolvers