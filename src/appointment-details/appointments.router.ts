import express, { Request, Response } from "express";
import * as AppointmentService from "./appointments.service";
import { Appointment, AppointmentProps } from "./appointment.interface";

export const appointmentRouter = express.Router();

appointmentRouter.get("/", async function (req: Request, res: Response) {
    try {
        const appointments: Appointment[] = await AppointmentService.findAll();
        res.status(200).send(appointments);
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Something went wrong, please try again later!");
    }
})
appointmentRouter.post("/", async (req: Request, res: Response) => {
    try {
        const appointment: AppointmentProps = req.body;

        const newItem = await AppointmentService.create(appointment);

        res.status(201).send(newItem);
    } catch (e) {
        res.status(500).send(e.message);
    }
});