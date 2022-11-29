export interface AppointmentProps {

    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: number;
    email: string;
    trainerPreference: string;
    physiotherapist: string;
    packages: number;
    streetAdress: string;
    city: string;
    state: string;
    country: string;
    pincode: string;


}

export interface Appointment extends AppointmentProps {
    id: number
}