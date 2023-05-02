import express from "express";
import db from "../config/db.js";
import indexRouter from "../routes/index.js";


const app = express();

app.set("port", process.env.PORT || 3000);

//Middleware
app.use(express.json());

//Routes
app.use("/", indexRouter);
app.use("*", (req, res) => {
    res.status(404).send("Not Found");
});

//Iniciar Servidor
app.listen(app.get("port"), () => {
    console.log("Server running at:", app.get("port"));
});

//Conexion a Planet Scale
db.connect().then(() => {
    console.log("Connected to database");
}).catch(() => {
    console.log("Error: ", err);
});