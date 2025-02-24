import {Router} from "express"
import {ItemsController} from "./items.controller"


const controller = new ItemsController();
const router = Router()

router.get("/all",controller.getAll)
router.get("/getbyid/:id",controller.getById)
router.post('/create',controller.create)
router.put("/update/:id",controller.update)
router.delete("/delete/:id",controller.delete)

export default router;