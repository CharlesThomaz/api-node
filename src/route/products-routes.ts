import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middlewares";
import { ProductsController } from "../controller/ProductsController";


const productsController = new ProductsController()

const productsRoutes = Router()

productsRoutes.get("/", productsController.index)

productsRoutes.post("/", myMiddleware, productsController.create)


export { productsRoutes }