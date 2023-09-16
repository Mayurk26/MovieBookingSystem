import { Genre } from "./genre";

export interface Movie {
    id:number;
    name:string;
    price:number;
    timeSlot:string;
    image:string;
    genre?:Genre[];
}
