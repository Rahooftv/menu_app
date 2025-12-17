import { MenuItem, IMenuItem } from "./menuItem.model"


export const menuItemService = {

  createMenuItem: async (data: Pick<IMenuItem,"name" |"description" |"price" |"menuId">) =>{
    return await MenuItem.create(data)
  },

  getItemsByMenuId: async (menuId:string) =>{
    return await MenuItem.find({ menuId })
  }
};
