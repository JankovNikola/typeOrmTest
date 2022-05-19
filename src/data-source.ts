import "reflect-metadata"
import { DataSource, EntityTarget } from "typeorm"
import { Reservation } from "./entity/Reservation";
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 3000,
    username: "postgres",
    password: "privremen",
    database: "User",
    synchronize: true,
    logging: false,
    entities: [User, Reservation],
    migrations: [],
    subscribers: [],
})

export function getRepo<T>(target: EntityTarget<T>) {
    return AppDataSource.getRepository(target);
}