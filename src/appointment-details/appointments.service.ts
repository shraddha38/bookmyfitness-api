// src/items/items.service.ts
import { Appointment, AppointmentProps } from "./appointment.interface";
import { Appointments } from "./appointments.interface";

let appointments: Appointments = {
    1: {
        id: 1,
        firstName: 'shraddha',
        lastName: 'sharma',
        age: 2,
        phoneNumber: 234567,
        email: 'as@gmail.com',
        trainerPreference: 'Female',
        physiotherapist: 'Yes',
        packages: 500,
        streetAdress: 'rothesay street',
        city: 'wp',
        state: 'mb',
        country: 'canada',
        pincode: 'huhu23',


    },
    2: {
        id: 2,
        firstName: 'sushant',
        lastName: 'sharma',
        age: 2,
        phoneNumber: 234567,
        email: 'as@gmail.com',
        trainerPreference: 'Female',
        physiotherapist: 'Yes',
        packages: 500,
        streetAdress: 'rothesay street',
        city: 'wp',
        state: 'mb',
        country: 'canada',
        pincode: 'huhu23',

    }
};


/**
 * Service Methods
 */

export const findAll = async (): Promise<Appointment[]> => { return Object.keys(appointments).map((a: string) => { return appointments[Number(a)] }) };



export const find = async (id: number): Promise<Appointment> => { return appointments[id] };

export const create = async (newItem: AppointmentProps): Promise<Appointment> => {
    const id = new Date().valueOf();

    appointments[id] = {
        id,
        ...newItem,
    };

    return appointments[id];
};