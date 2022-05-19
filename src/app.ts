import { AppDataSource } from "./data-source"
import express from "express"
import router from "./routers/user-router";

const app = express();

app.use(express.json());
app.use('/users', router);

AppDataSource.initialize().then(async () => {

    app.listen(340, () => {
        console.log('Server running on port 340...');
    })

}).catch(error => console.log(error))
