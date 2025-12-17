import { Router } from "express";
import { menuItemController } from "./menuItem.controller"

const router = Router()

router.post("/",menuItemController.createMenuItem)
router.get("/:id",menuItemController.getMenuItems)

export default router;
