import { Router } from "express";
import productsRouter from "./products.route.js";

const indexRouter = Router();

const prefix = "/api";

indexRouter.get(prefix, (req, res) => {
    res.send("DB AutoPartes Chávez")
});

indexRouter.use(`${prefix}/productos`, productsRouter);

export default indexRouter;