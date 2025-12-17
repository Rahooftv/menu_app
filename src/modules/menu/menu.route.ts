import { Router } from "express";
import { menuController } from "./menu.controller";

const router = Router()

router.post("/",menuController.createMenu)
router.get("/",menuController.getMenus)

export default router;
