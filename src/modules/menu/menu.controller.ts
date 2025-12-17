import { Request, Response } from "express";
import { menuService } from "./menu.service"

export const menuController = {

  createMenu: async (req:Request, res:Response) =>{
    try{

        const { name,description } = req.body
    
        const menu = await menuService.createMenu({ name,description })
        res.status(201).json({message:"Create Menu successfully",menu})
    }catch(err){
        res.status(500).json({message:"Failed to create",err})
    }

  },

  getMenus: async (req:Request, res:Response) =>{
    try{

        const menus = await menuService.getAllMenus()
        res.status(200).json({message:"Fetch Menus successfully",menus})
    }catch(err){
        res.status(500).json({message:"Failed to fetch",err})
    }

  }
}
