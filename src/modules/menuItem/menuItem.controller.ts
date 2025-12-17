import { Request, Response } from "express";
import { menuItemService } from "./menuItem.service"

export const menuItemController = {

  createMenuItem: async (req:Request, res:Response) => {
    try{
        const item = await menuItemService.createMenuItem(req.body)
        res.status(201).json({message:"Create MenuItem successfully",item})

    }catch(err){
           res.status(500).json({message:"Failed to create",err})

    }
  },

  getMenuItems: async (req: Request, res: Response) => {
    try{

        const items = await menuItemService.getItemsByMenuId(req.params.id)
        res.status(200).json({message:"Fetch MenuItems successfully",items})
    }catch(err){
        res.status(500).json({message:"Failed to create",err})
    }

  }
}