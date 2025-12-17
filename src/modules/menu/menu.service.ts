import { Menu, IMenu } from "./menu.model";

export const menuService = {

  createMenu: async (data:Pick<IMenu, "name" | "description">) =>{
    return await Menu.create(data)
  },

  getAllMenus: async () =>{
    return await Menu.find().sort({createdAt: -1})
  }
}
