import { Schema, model, Document } from "mongoose";

export interface IMenu extends Document {
  name:string
  description?:string
}


const menuSchema = new Schema<IMenu>({

    name: { type:String, required:true },
    description: { type:String}
  },

  { timestamps:true }
)

export const Menu = model<IMenu>("Menu",menuSchema)
