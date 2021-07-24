import { Document } from "mongoose";

export interface Product extends Document{
    id?: number;
    code: String;
    name: String;
    status:number;
}