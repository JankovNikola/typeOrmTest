import { DataSource } from "typeorm"
import { User } from "../entity/User"
import { Reservation } from "../entity/Reservation";
import express, { Request, Response } from "express"
import { getRepo } from "../data-source";

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {

    const userRepo = getRepo(User);
    const reservationRepo = getRepo(Reservation);

    const r1 = new Reservation()
    r1.date = new Date();
    const r2 = new Reservation()
    r2.date = new Date();
    await reservationRepo.save([r1, r2]);
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    user.reservations.push(r1);
    await userRepo.save(user)
    console.log(user.reservations);
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await userRepo.find();
    console.log('USEr: ' + users[0].reservations);
    const reservations = users[0].reservations;
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

    res.json(reservations);

})

export default router;