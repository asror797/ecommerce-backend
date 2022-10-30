import { Entity , Column , PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"SubCategory"})
export class SubCategory {
   @PrimaryGeneratedColumn("uuid")
   id:string
}