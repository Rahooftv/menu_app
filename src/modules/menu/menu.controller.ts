import { Request, Response } from "express";
import { menuService } from "./menu.service"

export const menuController = {

  createMenu: async (req:Request, res:Response) =>{

    const { name,description } = req.body

    const menu = await menuService.createMenu({ name,description })
    res.status(201).json(menu);
  },

  getMenus: async (req:Request, res:Response) =>{

    const menus = await menuService.getAllMenus()
    res.status(200).json(menus)
  }
};
